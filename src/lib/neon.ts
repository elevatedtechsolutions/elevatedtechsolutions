import { neon } from "@neondatabase/serverless";

export const QUOTE_REQUESTS_TABLE = "ets.quote_requests";

type PostgresErrorLike = Error & {
  code?: string;
  detail?: string;
  hint?: string;
  schema?: string;
  table?: string;
  column?: string;
  constraint?: string;
  severity?: string;
};

export function getDatabaseErrorDiagnostics(error: unknown) {
  if (error instanceof Error) {
    const postgresError = error as PostgresErrorLike;

    return {
      message: error.message,
      code: postgresError.code ?? null,
      detail: postgresError.detail ?? null,
      hint: postgresError.hint ?? null,
      schema: postgresError.schema ?? null,
      table: postgresError.table ?? null,
      column: postgresError.column ?? null,
      constraint: postgresError.constraint ?? null,
      severity: postgresError.severity ?? null
    };
  }

  return {
    message: "Unknown database error",
    code: null,
    detail: null,
    hint: null,
    schema: null,
    table: null,
    column: null,
    constraint: null,
    severity: null
  };
}

export function getNeonSql() {
  const databaseUrl = process.env.DATABASE_URL?.trim();

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }

  return neon(databaseUrl);
}
