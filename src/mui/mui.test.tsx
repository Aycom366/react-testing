import { screen } from "@testing-library/react";
import { MuiMode } from "./MuiMode";
// import { AppProvider } from "../components/providers/AppProvider";
import { render } from "../test-utils";

describe("MuiMode", () => {
  test("renders texts correctly", () => {
    // render(<MuiMode />, {
    //   wrapper: AppProvider,
    // });
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
