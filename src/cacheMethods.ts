import type { PrismaQueryAction, PrismaMutationAction } from "./types";

export const defaultCacheMethods: PrismaQueryAction[] = [
  "findUnique",
  "findFirst",
  "findMany",
  "count",
  "aggregate",
  "groupBy",
  "findRaw",
  "aggregateRaw",
];

export const defaultMutationMethods: PrismaMutationAction[] = [
  "create",
  "createMany",
  "update",
  "updateMany",
  "upsert",
  "delete",
  "deleteMany",
  "executeRawUnsafe",
];
