"use client";

import { cn } from "@/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

const navLinks: NavLink[] = [
  { href: "/card-to-sheba", label: "کارت به شبا" },
  { href: "/sheba-to-card", label: "شبا به کارت" },
  { href: "/account-to-sheba", label: "حساب به شبا" },
  { href: "/sheba-to-account", label: "شبا به حساب" },
  { href: "/card-to-account", label: "کارت به حساب" },
  { href: "/account-to-card", label: "حساب به کارت" },
];

export default function BankServicesNavigation() {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "bg-white shadow-main rounded-xl w-full  flex justify-between items-center p-4"
      )}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-xl",
            pathname === link.href
              ? "text-primary-main font-bold"
              : "text-custom-gray-300 font-normal"
          )}
        >
          {link.icon && <span className="mr-2">{link.icon}</span>}
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
