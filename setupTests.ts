import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { rawMatch } from "./src/fixtures/rawMatch";
import { rawPlayer } from "./src/fixtures/rawPlayer";

const server = setupServer(
  rest.post(
    "https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev",
    (_, res, ctx) => {
      return res(
        ctx.json({
          data: {
            matches: rawMatch,
            players: rawPlayer,
          },
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
