import { rest, setupWorker } from "msw";

const handlers = [
  rest.get("/data", (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        data: "kek",
      })
    );
  }),

  rest.post("/login", async (req, res, ctx) => {
    const body = await req.json();

    return res(ctx.delay(1000), ctx.status(200));
  }),
];

export const worker = setupWorker(...handlers);
