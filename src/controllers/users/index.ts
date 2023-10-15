import { user } from "../../database/";

//Single actions for the users

export const createUser = async () => {
  try {
    const newUser = await user.create({
      firstName: "Stoyan",
      lastName: "Veselinov",
      email: "sus@me.com",
      password: "Nevestulka",
    });
    return new Response(
      JSON.stringify({ message: "User created with success" })
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        err: err,
      })
    );
  }
};

export const readUser = async () => {
  try {
    const searchedUser = await user.read({
      id: 3,
      email: "sus@me.com",
    });

    return new Response(JSON.stringify({ user: searchedUser }));
  } catch (err) {
    return new Response(JSON.stringify({ err: err }));
  }
};
