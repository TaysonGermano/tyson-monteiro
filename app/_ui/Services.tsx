import { SERVICES } from "@/lib/contants";

export default function Services() {
  return (
    <section className="scroll-mt-24" id="services">
      <h2 className="text-2xl font-bold">My services</h2>
      <p className="text-sm text-black/60 dark:text-white/60 mt-2">
        Ways I can help you build, grow and maintain your software.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="rounded-lg border border-black/15 dark:border-white/15 p-5"
          >
            <div className="text-black dark:text-white">{service.icon}</div>
            <h3 className="mt-3 font-semibold">{service.title}</h3>
            <p className="mt-1 text-sm text-black/60 dark:text-white/60">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
