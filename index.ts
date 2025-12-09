import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => ({
    message: "Hello from Elysia on Bun!",
    runtime: "bun",
    version: Bun.version,
  }))
  .get("/health", () => ({ status: "ok" }))
  .get("/api/users", () => ({
    users: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ],
  }))
  .post("/api/users", ({ body }) => {
    return {
      message: "User created",
      user: body,
    };
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

