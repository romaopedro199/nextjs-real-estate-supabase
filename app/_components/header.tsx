"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type HeaderLinkProps = {
  label: string;
  href: string;
  active: boolean;
};

const HeaderLink = ({ label, href, active }: HeaderLinkProps) => (
  <Link href={href}>
    <li
      className={`hover:text-primary font-medium text-sm cursor-pointer ${
        active ? "text-primary" : "text-black"
      }`}
    >
      {label}
    </li>
  </Link>
);

function Header() {
  const path = usePathname();

  const links = [
    { label: "Sale", href: "/" },
    { label: "Rent", href: "/rent" },
    { label: "Agents", href: "/agents" },
  ];

  return (
    <div className="p-6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bg-white">
      <div className="flex gap-12 items-center">
        <Image src="/logo.svg" width={150} height={150} alt="" />
        <ul className="hidden md:flex gap-10">
          {links.map((link) => (
            <HeaderLink
              key={link.label}
              label={link.label}
              href={link.href}
              active={path === link.href}
            />
          ))}
        </ul>
      </div>
      <div className="flex gap-2">
        <Button className="flex gap-2">
          <Plus className="h-5 w-5" />
          Post your Ad
        </Button>
        <Button variant="outline">Login</Button>
      </div>
    </div>
  );
}

export default Header;
