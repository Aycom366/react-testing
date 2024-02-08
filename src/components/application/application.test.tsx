import { render, screen } from "@testing-library/react";
import { Application } from "./Application";
import user from "@testing-library/user-event";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    //check to see if the name input field is in the document
    //This gets based on the label or more accessibility value
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameLabel = screen.getByLabelText("Name");
    expect(nameLabel).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });

  test("select a country", async () => {
    user.setup();
    render(<Application />);
    const jobLocationElement = screen.getByRole("combobox", {
      name: /job location/i,
    });
    await user.selectOptions(jobLocationElement, "US");
    expect(jobLocationElement).toHaveValue("US");
  });

  test("Upload file", async () => {
    user.setup();
    render(<Application />);
    const fileInput = screen.getByLabelText(/file upload/i) as HTMLInputElement;
    expect(fileInput).toBeInTheDocument();
    const file = new File(["test"], "test.png", { type: "image/png" });
    await user.upload(fileInput, file);
    expect(fileInput?.files?.[0]).toBe(file);
  });
});
