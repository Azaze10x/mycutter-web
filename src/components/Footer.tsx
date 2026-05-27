"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-auto border-t border-[#ddc0b7] bg-[#fdf9f4]">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-[#9f3f1a] tracking-tighter italic font-extrabold">mYcutter</p>
            <p className="text-sm text-[#56423b] mt-1">
              {t("footerTagline")}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/support"
              className="text-[#56423b] hover:text-[#9f3f1a] transition-colors"
            >
              {t("footerSupport")}
            </Link>
            <Link
              href="/privacy"
              className="text-[#56423b] hover:text-[#9f3f1a] transition-colors"
            >
              {t("footerPrivacy")}
            </Link>
            <Link
              href="/terms"
              className="text-[#56423b] hover:text-[#9f3f1a] transition-colors"
            >
              {t("footerTerms")}
            </Link>
          </div>
        </div>

        <p className="text-xs text-[#8a726a] mt-8 text-center">
          {t("footerRights")}
        </p>
      </div>
    </footer>
  );
}
