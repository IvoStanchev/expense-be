Bun.serve({
  fetch(req: Request) {
    return new Response("Bun!");
  },
  port: 3000,
});
