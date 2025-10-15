import path from "path";
import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.sqlite")
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations")
    },
    useNullAsDefault: true
  }
};

export default config;