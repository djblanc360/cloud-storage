import { getDb, getConnection } from "./src/server/db";

async function main() {
  try {
    console.log("Testing connection to SingleStore...");
    const connection = await getConnection();
    const db = await getDb();
    
    // Try a simple query
    const result = await db.execute(sql`SELECT 1 as test`);
    console.log("Connection successful:", result);
    
    // Close connection
    await connection.end();
  } catch (error) {
    console.error("Connection failed:", error);
  }
}

main(); 