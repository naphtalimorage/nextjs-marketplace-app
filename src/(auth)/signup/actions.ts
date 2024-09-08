"user server";

import { lucia } from "@/auth";
import prisma from "@/lib/prisma";
import { signupSchema, SignupValues } from "@/lib/validation";
import { hash } from "@node-rs/argon2";
import { error } from "console";
import { generateIdFromEntropySize } from "lucia";
import { isRedirectError } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function Signup(
  credentials: SignupValues
): Promise<{ error: string }> {
  try {
    const { username, password, email } = signupSchema.parse(credentials);

    const passwordHash = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1
    });

    const userId = generateIdFromEntropySize(10);

    const existingUserName = await prisma.user.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (existingUserName) {
      return {
        error: "Username already taken.",
      };
    }

    const existingEmail = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });

    if (existingEmail) {
      return {
        error: "Email already taken.",
      };
    }

    await prisma.user.create({
      data: {
        id: userId,
        username: username,
        email,
        passwordHash,
      },
  })


    const session = await lucia.createSession(userId, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);


	return redirect("/");
    
  } catch (err) {
    if(isRedirectError(error)) throw error;
    console.error(err);
    return {
      error: "Something went wrong. Please try again.",
    };
  }
}
