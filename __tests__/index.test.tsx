import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("has a heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
