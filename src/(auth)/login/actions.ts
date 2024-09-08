"use server";
import { lucia } from "@/auth";
import prisma from "@/lib/prisma";
import { LoginSchema, LoginValues } from "@/lib/validation";
import { verify } from "@node-rs/argon2";
import { isRedirectError } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function Login(
  credentials: LoginValues
): Promise<{ error: string }> {
  try {
    const { username, password } =  LoginSchema.parse(credentials);

    const exisstingUser = await prisma.user.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (!exisstingUser || !exisstingUser.passwordHash) {
      return {
        error: "Invalid username or password",
      };
    }

    const isPasswordValid = await verify(exisstingUser.passwordHash, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    if (!isPasswordValid) {
      return {
        error: "Invalid username or password",
      };
    }

    const session = await lucia.createSession(exisstingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return redirect("/");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);
    return {
      error: "Something went wrong, please try again.",
    };
  }
}
