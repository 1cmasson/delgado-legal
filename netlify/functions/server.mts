import { createRequestHandler } from "react-router";
import type { Context } from "@netlify/functions";

// @ts-expect-error - virtual module from build
import * as serverBuild from "../../build/server/index.js";

const handler = createRequestHandler(serverBuild, "production");

export default async (request: Request, _context: Context) => {
  return handler(request);
};
