"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const Links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "SellBike", href: "/sellmotorbike" },
    { label: "Buy Bike", href: "/buymotorbike" },
  ];
  return (
    <div className=" bg-card">
      <div className="flex space-x-8  text-primary px-8  flex-wrap  py-3">
        <Link href="/" className="text-3xl font-bold text-red-700 font-serif">
          MotorDealers
        </Link>
        <ul className=" flex space-x-8 text-primary  relative left-64 top-2 ">
          {Links &&
            Links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link 
                  href={link.href} 
                  className={`text-sm ${isActive ?  " border-b-2  border-red-700": ""}`}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
