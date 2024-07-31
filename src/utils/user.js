import prisma from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";
export async function createUserWithAccount({ name, email, password }) {
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
        accounts: {
          create: {
            type: "credentials",
            provider: "email",
            providerAccountId: uuidv4(),
          },
        },
      },
      include: {
        accounts: true,
      },
    });
  } catch (error) {
    console.error("error creating the user: ", error);
    throw error;
  }
}

export async function getUserByEmail(email){
try {
    const user = await prisma.user.findUnique({
        where:{
            email,
        }
    })
    return user;
} catch (error) {
    console.error("error getting user by email",error)
    throw error;
}
}
