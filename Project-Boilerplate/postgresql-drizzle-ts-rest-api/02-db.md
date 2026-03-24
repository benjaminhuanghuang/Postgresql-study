# DB

Create drizzle.config.ts

```js
import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  out: "./drizzle",
});

```

Create tables

```sh
npx drizzle-kit generate
npx drizzle-kit push
```
