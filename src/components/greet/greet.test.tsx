/**
 * Greet should render the text Hello and if a name is passed,
 * it should render hello followed by the name passed in.
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const greetElement = screen.getByText(/Hello/i);
  expect(greetElement).toBeInTheDocument();
});

//Renders a component with props
test("Greet renders the name of the props passed in", () => {
  render(<Greet name='Ayomide!' />);
  const textElement = screen.getByText(/Hello Ayomide!/i);
  expect(textElement).toBeInTheDocument();
});
