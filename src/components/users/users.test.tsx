import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("Mocking HttP requests", () => {
  it("should render the component correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  it("should render a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  it("renders error message when fetch fails", async () => {
    // Override the default request handler to return a 500 status code.
    //This is resetting the default request handler for the URL to return a 500 status code.
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const errorMessage = await screen.findByText("Error fetching");
    expect(errorMessage).toBeInTheDocument();
  });
});
