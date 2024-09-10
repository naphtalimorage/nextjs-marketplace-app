import { Metadata } from "next";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "signup",
};
export default function Signup() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className=" shadow-2xl  flex h-full max-h-[40rem] w-full max-w-[30rem] rounded-2xl bg-card">
        <div className="w-full  space-y-20 overflow-y-auto p-10 ">
          <div className="space-y-1 text-center">
            <h2 className="text-3xl font-bold ">Sign Up</h2>
            <p className="text-muted-foreground">
              Sign up to access our features and explore our products.
            </p>
          </div>
          <div className="relative bottom-10">
            <SignUpForm/>
            <Link href="/login" className=" block text-center hover:underline">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
