/**
 * Guards the "images follow the colour toggle" rule.
 *
 * Desaturation is applied globally in globals.css rather than per component,
 * so any image added later is covered automatically. The risk with a blanket
 * rule is that it gets silently defeated: someone adds a Tailwind filter class
 * or an inline style to an image and it stays colourful in mono mode, which is
 * exactly the bug this replaced.
 *
 * These tests fail loudly if that happens, or if the global rule is removed.
 */
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const ROOTS = ["app", "components"];
const CSS_PATH = "app/globals.css";

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry.startsWith(".")) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (/\.(tsx|jsx)$/.test(entry)) out.push(full);
  }
  return out;
}

const sourceFiles = ROOTS.flatMap(walk);

/** Renders an <img> at runtime: next/image, a bare <img>, or a <video>. */
const IMAGE_TAG = /<(Image|img|video)\b[^>]*>/gs;

/**
 * Filter utilities that would override the global desaturation. Tailwind's
 * grayscale/saturate/filter-none, or an inline style setting `filter`.
 * `.keep-color` / `.keep-mono` are the sanctioned opt-outs, so they pass.
 */
const OVERRIDES = [
  /\bgrayscale-0\b/,
  /\bfilter-none\b/,
  /\bsaturate-(?!0\b)\d+\b/,
  /style=\{\{[^}]*\bfilter\b/,
];

describe("image desaturation", () => {
  it("keeps the global rule in globals.css", () => {
    const css = readFileSync(CSS_PATH, "utf8");

    // Images are desaturated by default...
    expect(css).toMatch(/^img,/m);
    expect(css).toMatch(/filter:\s*saturate\(0\)/);

    // ...and regain colour only under the .color class.
    expect(css).toMatch(/\.color img/);
  });

  /**
   * Regression guard. `saturate(1)` is the obvious way to restore colour, but
   * the CSS minifier strips the redundant-looking argument and emits invalid
   * `saturate()`, which browsers drop — leaving every image grey in colour
   * mode. `filter: none` survives minification, so insist on it.
   */
  it("restores colour with `none`, which survives minification", () => {
    const css = readFileSync(CSS_PATH, "utf8");
    const colorRule = css.match(/\.color img[^{]*\{([^}]*)\}/);

    expect(colorRule).not.toBeNull();
    expect(colorRule![1]).toMatch(/filter:\s*none/);
    expect(css).not.toMatch(/filter:\s*saturate\(1\)/);
  });

  it("has no image that overrides the global filter", () => {
    const offenders: string[] = [];

    for (const file of sourceFiles) {
      const src = readFileSync(file, "utf8");
      for (const tag of src.match(IMAGE_TAG) ?? []) {
        if (/\bkeep-(color|mono)\b/.test(tag)) continue; // sanctioned opt-out
        if (OVERRIDES.some((re) => re.test(tag))) {
          offenders.push(`${file}: ${tag.replace(/\s+/g, " ").slice(0, 120)}`);
        }
      }
    }

    expect(offenders).toEqual([]);
  });

  it("finds images to check, so the scan cannot silently pass on zero files", () => {
    const withImages = sourceFiles.filter((f) =>
      IMAGE_TAG.test(readFileSync(f, "utf8")),
    );
    expect(withImages.length).toBeGreaterThan(0);
  });
});
