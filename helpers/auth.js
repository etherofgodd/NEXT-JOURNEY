import { compare, hash } from "bcrypt";

export async function hashPassword(password) {
  return await hash(password, 12);
}

export async function compareHashPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);

  return isValid;
}
