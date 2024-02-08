import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { AppProvider } from "./components/providers/AppProvider";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AppProvider, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
