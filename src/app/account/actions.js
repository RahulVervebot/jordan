"use server";

import { cookies } from "next/headers";

const BASE_URL = "https://jordan.agoxn.cloud";

export async function registerUser(formData) {
  "use server";
  const email = formData.get("email");
  const password = formData.get("password");
  const fname = formData.get("fname");
  const lname = formData.get("lname");
  const mobile = formData.get("mobile");

  try {
    const response = await fetch(`${BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, fname, lname, mobile }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Registration Failed: ${JSON.stringify(errorData)}`);
    }

    return { success: true };
  } catch (error) {
    throw error;
  }
}

export async function loginUser(formData) {
  "use server";
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Login Failed: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    const token = data.access_token;

    // Save the token in cookies
    cookies().set("access_token", token, {
      httpOnly: true,
      path: "/",
      // secure: true, // in production
      // maxAge: ...
    });

    return { success: true, user: data.user };
  } catch (error) {
    throw error;
  }
}

export async function logoutUser() {
  "use server";
  cookies().delete("access_token");
  return { success: true };
}
