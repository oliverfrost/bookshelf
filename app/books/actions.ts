"use server";

import { db } from "../../db/db";

export const getAllBooks = async () => {
  return db.query.BookTable.findMany({});
};
