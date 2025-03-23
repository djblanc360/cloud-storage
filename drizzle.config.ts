import { defineConfig } from "drizzle-kit";

import { env } from "~/env";

export default defineConfig ({
  dialect: "singlestore",
  schema: "./src/server/db/schema.ts",
  tablesFilter: ["cloud-storage_*"],
})
