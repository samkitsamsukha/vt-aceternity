"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
// import Link from "next/link";
import Link from "react-scroll";

// export function NavbarDemo() {
//   return (
//     <div className="relative flex items-center justify-center">
//       <Navbar className="top-2 w-fit  h-[35px]" />
//     </div>
//   );
// }

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-3 inset-x-0 w-fit mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">

        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Portfolio">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Automative Smart Adaptive Parking"
              href="/project-asap"
              src="/asap.jpg"
              description="sakdo nabekjf ljbeajo lkneba ljWHO NBFEOLN JOEG jnrsojn nkwbgoj"
            />
            <ProductItem
              title="Project 2"
              href="https://tailwindmasterkit.com"
              src="/html.png"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Project 3"
              href="https://gomoonbeam.com"
              src="/html.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Skills">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Coding Profiles">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://leetcode.com/u/varenyathaker/" target='_blank'>LeetCode</HoveredLink>
            <HoveredLink href="https://codeforces.com/profile/varenya375" target='_blank'>CodeForces</HoveredLink>
            <HoveredLink href="/seo">xxx</HoveredLink>
            <HoveredLink href="/branding">xxx</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
