import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

test.skip("renders navbar", () => {
  render(<Navbar />);

  const heading = screen.getByText(/get started/i);

  expect(heading).toBeInTheDocument();
});
