"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Links = [
  {
    step: "1",
    buttonText: "Motorbike Details",
    description: "Tell us about your Motorbike",
    href: "/contactdetails",
  },
  {
    step: "2",
    buttonText: "Contact Details",
    description: "Let us know how to reach you",
    href: "/bikedetails",
  },
];
export default function ButtonLinks() {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex flex-row gap-20 justify-center items-center">
        {Links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link href={link.href} key={link.step}>
              <div
                className={`w-80 h-28 border ${
                  isActive
                    ? "border   border-green-600 text-green-600"
                    : "border border-black text-black"
                }`}
              >
                <Button
                  className={`rounded-full w-11 h-11${
                    isActive
                      ? "border   border-green-600 text-green-600"
                      : "border border-black text-black"
                  }`}
                >
                  {link.step}
                </Button>
                <Button
                  className={` ${
                    isActive
                      ? "border   border-green-600 text-green-600"
                      : "border border-black text-black"
                  }`}
                >
                  {link.buttonText}
                </Button>
                <p
                  className={`${
                    isActive
                      ? "border   border-green-600 text-green-600"
                      : "border border-black text-black"
                  }`}
                >
                  {link.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
