import * as users from "../repositories/userRepository";
import { IRegistryBody } from "../types/dataTypes";
import { passwordAuth, passwordEncrypt } from "../utils/encryptionUtils";

export async function signupRoutine(userData: IRegistryBody) {
  const findUser = await users.findByEmail(userData.email);

  if (findUser !== null)
    throw { type: "already_exists_error", message: "email is already taken." };
  userData.password = passwordEncrypt(userData.password);
  await users.insert(userData);
}

export async function signinRoutine(credentials: IRegistryBody, id: number) {
  const findUser = await users.findByEmail(credentials.email);
  if (findUser === null) {
    throw { type: "already_exists_error", message: "email is already taken." };
  }
  return await passwordAuth(credentials, findUser!);
}
