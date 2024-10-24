"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Links = [
  {
    step: "1",
    buttonText: "Motorbike Details",
    description: "Tell us about your Motorbike",
    href: "/bikedetails",
  },
  {
    step: "2",
    buttonText: "Contact Details",
    description: "Let us know how to reach you",
    href: "/contactdetails",
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
                className={`w-80 h-28 mt-10 p-2  rounded-sm ${ 
                  isActive
                    ? "border   border-green-600 text-green-600"
                    : "border border-black text-black"
                }`}
              >
                <Button
                  className={`rounded-full w-14 h-14 ${
                    isActive
                      ? "bg-green-600 text-white "
                      : "bg-gray-500"
                  }`}
                >
                  {link.step}
                </Button>
                <Button
                  className={` text-xl font-bold ${
                    isActive
                      ? "text-green-600"
                      : " text-black"
                  }`}
                >
                  {link.buttonText}
                </Button>
                <p
                  className={` flex text-sm ml-[70px] ${
                    isActive
                      ? "text-green-600"
                      : " text-black"
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
