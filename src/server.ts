import { RequestConstructor, routes } from "./routes";

Bun.serve({
  fetch(req: Request) {
    const customRequest = new RequestConstructor(req);
    return customRequest.request(routes);
  },
  port: 3000,
});
