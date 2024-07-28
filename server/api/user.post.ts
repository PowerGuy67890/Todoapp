import { users, InsertUser } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  // might want to  validte the body using zod so people don't put malicious payloads
  const body = await readBody(event);

  const newUser: InsertUser = {
    ...body,
    age: parseInt(body.age)
  };

  console.log(newUser)
// yup so you can use the users endpoint to  list users or use the drizzle studio to see what is in your database
  const res = await db.insert(users).values(newUser);

  // ypu anything else? I think you probaly should do a todo app on your own 
  // here is the stack and see if you can do it without a tutorial you can use any other resource besides a tutorial 


  // Here is the tech stack 

  // drizle-orm 
  // vue shadcn
  // turso
  // nuxt
  // and deploy it to cloudflare pages


  // you think you can do that if you dont' feel  comfortable then finish the rest of the tutorial using the turso db we created
  return {
    res,
  };
});
