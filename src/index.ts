const server = Bun.serve({
  port: Bun.env.PORT || 8888,
  fetch(request) {
    return new Response("Welcome to Bun! aaaaa");
  },
});


console.log(`Listening on localhost: ${server.port}`);
