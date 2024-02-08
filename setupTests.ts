import "@testing-library/jest-dom";
import "whatwg-fetch"; //polyfill for fetch API
import { server } from "./src/mocks/server";

beforeAll(() => {
  // Enable mocking.
  server.listen();
});

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});
