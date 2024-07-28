import { users } from "../database/schema";

export default defineEventHandler(async () => {
  try {
    const usersResp = db.select().from(users).all();
    return { "users" : usersResp}
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});