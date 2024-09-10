import { Metadata } from "next";
import Link from "next/link";
import LoginForm from "./loginForm";

export const metadata: Metadata = {
  title: "login",
};

export default function Login() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className=" shadow-2xl  flex h-full max-h-[40rem] w-full max-w-[30rem] rounded-2xl bg-card">
        <div className="w-full  space-y-20 overflow-y-auto p-10 ">
          <div className="space-y-1 text-center">
            <h2 className="text-3xl font-bold ">Login</h2>
            <p className="text-muted-foreground">
                Sign in with your email address to access your account.
            </p>
          </div>
          <div className="relative bottom-10">
            <LoginForm/>
            <Link href="/signup" className=" block text-center hover:underline">
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
