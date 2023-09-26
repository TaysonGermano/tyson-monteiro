import { render, screen } from "@testing-library/react";
import InfoCard from "../components/InfoCard";

test.skip("renders info card", () => {
  render(<InfoCard title="Skills" description="Hello" />);

  const title = screen.getByText("Skills");

  expect(title).toBeInTheDocument();
});
