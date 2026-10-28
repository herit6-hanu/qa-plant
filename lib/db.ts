import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "qaplant",
  password: "Herit6@143",
  port: 5432,
});