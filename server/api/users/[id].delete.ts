import { users } from "~/server/database/schema";
import { eq } from "drizzle-orm";
export default defineEventHandler(async (event) => {
  try {
    const userId = event.context.params?.id as string;
    const usersResp = db
      .delete(users)
      .where(eq(users.id, parseInt(userId)))
      .run();
    return { user: usersResp };
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
/*import { users } from "~/server/database/schema";

export default defineEventHandler(async(event)=>{
    const id = getRouterParam(event, "id");
    console.log(id)
    //  delete user by id


    const users = await db.select().from(usersTable)


    return {
        users
    }
})*/