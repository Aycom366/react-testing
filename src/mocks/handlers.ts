import { rest } from "msw";

// Provide the server-side API with the request handlers.
export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Leanne Graham",
        },
        {
          name: "Clark Kent",
        },
        {
          name: "Princess Diana",
        },
      ])
    );
  }),
];
