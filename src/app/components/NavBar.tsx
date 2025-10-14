"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Pen,
  Compass,
  MessageCircle,
  FileText,
} from "lucide-react";

export const NavBar = () => {
  const pathname = usePathname();

  const icons = [
    { id: "home", href: "/", icon: <Home className="w-5 h-5" /> },
    { id: "about", href: "/about", icon: <User className="w-5 h-5" /> },
    { id: "projects", href: "/projects", icon: <FileText className="w-5 h-5" /> },
    // { id: "pen", href: "/pen", icon: <Pen className="w-5 h-5" /> },
    { id: "contact", href: "/contact", icon: <MessageCircle className="w-5 h-5" /> },
  ];

  return (
    <div className="fixed inset-x-0 bottom-6 flex justify-center z-50" suppressHydrationWarning>
      <nav className="flex items-center justify-between gap-3 bg-white/70 backdrop-blur-lg border border-neutral-200 shadow-md rounded-2xl px-3 py-2">
        {icons.map((item) => {
          // Path aktif akan sesuai dengan URL sekarang
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              href={item.href}
              key={item.id}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-neutral-800 text-white"
                  : "bg-transparent text-neutral-500 hover:bg-neutral-200"
              }`}
            >
              {item.icon}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
