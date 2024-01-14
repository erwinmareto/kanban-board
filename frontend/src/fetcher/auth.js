"use server";

import { cookies } from "next/headers";

const registerUser = async (payload) => {
  try {
    const user = await fetch("http://localhost:8000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return user.json();
  } catch (error) {
    throw new Error(error);
  }
};

const loginUser = async (payload) => {
  try {
    const user = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const userData = await user.json();
    cookies().set("id", userData.data.id);
    cookies().set("username", userData.data.username);
    cookies().set("token", userData.data.accessToken);
    return userData;
  } catch (error) {
    throw new Error(error);
  }
};

export { loginUser, registerUser };
