"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import LanguageSelector from "@/components/LanguageSelector";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useI18n();

  const navItems = [
    { label: t("navHome"), href: "/" },
    { label: t("navSupport"), href: "/support" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fdf9f4]/90 backdrop-blur-sm border-b border-[#ddc0b7]">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-[32px] leading-none text-[#9f3f1a] tracking-tighter italic font-extrabold whitespace-nowrap">
            mYcutter
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      active
                        ? "bg-[#9f3f1a] text-white"
                        : "text-[#56423b] hover:bg-[#e6e2dd] hover:text-[#1c1c19]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <LanguageSelector />
        </div>
      </nav>
    </header>
  );
}
