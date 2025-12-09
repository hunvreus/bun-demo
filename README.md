# Bun + Elysia Demo

Simple demo project using Elysia.js with Bun runtime.

## Setup

```bash
bun install
```

## Run

```bash
bun run dev
```

Or:

```bash
bun run index.ts
```

## Endpoints

- `GET /` - Hello message with runtime info
- `GET /health` - Health check
- `GET /api/users` - List users
- `POST /api/users` - Create user (expects JSON body)

## Deploy to /dev/push

1. Push this repo to GitHub
2. Create a new project in /dev/push
3. Select the `bun-1.3` runner image
4. Set build command: `bun install`
5. Set start command: `bun run index.ts`
6. Deploy!

