import { PrismaClient } from "@prisma/client";
import { hashPassword } from "./utils";

interface User {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

interface SearchedUser {
  email: string;
  id: number;
}

const db = new PrismaClient();

const createUserInDatabase = async (userBody: User) => {
  const hashedPass = await hashPassword(userBody.password);

  try {
    const newUser = await db.user.create({
      data: {
        firstName: userBody.firstName,
        lastName: userBody.lastName,
        email: userBody.email,
        password: hashedPass,
      },
    });
  } catch (err) {
    return err;
  }
};

const readUserInDatabase = async (user: SearchedUser) => {
  try {
    const result = await db.user.findFirst({
      where: {
        id: user.id,
        email: user.email,
      },
    });
    return result;
  } catch (err) {
    return err;
  }
};

const updateUser = async () => {};

export const user = {
  create: createUserInDatabase,
  read: readUserInDatabase,
  update: updateUser,
};

export const expenses = {};

export const categories = {};
