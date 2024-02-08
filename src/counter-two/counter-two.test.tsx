import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./CounterTwo";

describe("CounterTwo", () => {
  it("should render the component correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });
});
