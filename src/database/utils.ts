export const hashPassword = async (password: string) => {
  const hash = await Bun.password.hash(password, {
    algorithm: "bcrypt"
  });
  return hash;
};

export const comparePassword = async (
  receivedPass: string,
  savedPass: string
) => {
  const isMatch = await Bun.password.verify(receivedPass, savedPass);
  return isMatch;
};
