/*
drizzle-kit migrate 替代，

用 drizzle-orm/postgres-js/migrator 的API
import.meta.url === file://${process.argv[1]} 这行说明它被设计成"既可以被 import 复用，也可以直接 node migrate.ts 单独执行"的双用途模块，CLI 命令做不到这点。
*/

import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

dotenv.config();

const runMigrations = async () => {
  const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 });
  if (!migrationClient) {
    throw new Error("DATABASE_URL is not set");
  }
  const migrationDb = drizzle(migrationClient);
  console.log("Running migrations...");
  await migrate(migrationDb, { migrationsFolder: "./src/db/migrations" });
  console.log("Migrations completed");
  await migrationClient.end();
};
if (import.meta.url === `file://${process.argv[1]}`) {
  runMigrations()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error("Migration failed:", error);
      process.exit(1);
    });
}
