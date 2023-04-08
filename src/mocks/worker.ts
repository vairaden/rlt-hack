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

  rest.post("/register", async (req, res, ctx) => {
    const body = await req.json();

    return res(ctx.delay(1000), ctx.status(200));
  }),

  rest.post("/search", async (req, res, ctx) => {
    const body = await req.json();

    return res(ctx.delay(1000), ctx.status(200), ctx.json({ id: 111 }));
  }),

  rest.get("/details", async (req, res, ctx) => {
    const { id } = req.params;

    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json([
        { month: "янв", count: 10 },
        { month: "фев", count: 20 },
        { month: "мар", count: 15 },
        { month: "апр", count: 25 },
        { month: "май", count: 22 },
        { month: "июн", count: 30 },
        { month: "июл", count: 28 },
        { month: "авг", count: 12 },
        { month: "сен", count: 20 },
        { month: "окт", count: 29 },
        { month: "ноя", count: 17 },
        { month: "дек", count: 28 },
      ])
    );
  }),
];

export const worker = setupWorker(...handlers);
