"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./Header.css";

import logoImg from "@/assets/logo.png";
export default function Header() {
  const path = usePathname();
  return (
    <header className="header">
      <Link className="logo" href="/">
        <Image src={logoImg} />
        NextLevel Food
      </Link>
      <nav className="nav">
        <ul>
          <li>
            <Link
              href="/meals"
              className={path.startsWith("/meals") ? "active" : undefined}
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              className={path.startsWith("/community") ? "active" : undefined}
              href="/community"
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
