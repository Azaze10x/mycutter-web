"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

type Platform = "mac" | "windows";

export default function SupportPage() {
  const { t } = useI18n();
  const [platform, setPlatform] = useState<Platform>("mac");

  const faq = platform === "mac"
    ? [
        { q: t("faqMacInternetQ"), a: t("faqMacInternetA") },
        { q: t("faqMacWatermarkQ"), a: t("faqMacWatermarkA") },
        { q: t("faqMacFormatsQ"), a: t("faqMacFormatsA") },
        { q: t("faqMacRefundQ"), a: (
          <>
            {t("faqMacRefundA")}{" "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9f3f1a] hover:underline"
            >
              reportaproblem.apple.com
            </a>{" "}
            .
          </>
        )},
      ]
    : [
        { q: t("faqWinWhenQ"), a: t("faqWinWhenA") },
        { q: t("faqWinProjectsQ"), a: t("faqWinProjectsA") },
        { q: t("faqWinFormatsQ"), a: t("faqWinFormatsA") },
        { q: t("faqWinWatermarkQ"), a: t("faqWinWatermarkA") },
      ];

  const requirements = platform === "mac"
    ? [t("reqMac1"), t("reqMac2"), t("reqMac3")]
    : [t("reqWin1"), t("reqWin2"), t("reqWin3")];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold text-[#1c1c19] mb-4">
            {t("supportTitle")}
          </h1>
          <p className="text-[#56423b] mb-10">
            {t("supportSubtitle")}
          </p>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-[#e6e2dd] mb-8">
            <h2 className="text-xl font-bold text-[#1c1c19] mb-3">
              {t("supportContactTitle")}
            </h2>
            <p className="text-[#56423b] mb-4">
              {t("supportContactDesc")}
            </p>
            <a
              href="mailto:info@shamantech.co"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9f3f1a] text-white rounded-md font-medium hover:bg-[#802a04] transition-colors"
            >
              info@shamantech.co
            </a>
          </div>

          {/* Platform Tabs */}
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => setPlatform("mac")}
              className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                platform === "mac"
                  ? "bg-[#1c1c19] text-white"
                  : "bg-[#e6e2dd] text-[#56423b] hover:bg-[#ddd9d5]"
              }`}
            >
              {t("platformMac")}
            </button>
            <button
              onClick={() => setPlatform("windows")}
              className={`px-4 py-2 rounded-md font-medium text-sm transition-colors inline-flex items-center gap-2 ${
                platform === "windows"
                  ? "bg-[#0078D4] text-white"
                  : "bg-[#e6e2dd] text-[#56423b] opacity-60 hover:opacity-80"
              }`}
            >
              {t("platformWin")}
              <span className="text-[10px] uppercase tracking-wider bg-white/20 px-1.5 py-0.5 rounded">
                {t("badgeSoon")}
              </span>
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-[#e6e2dd] mb-8">
            <h2 className="text-xl font-bold text-[#1c1c19] mb-3">
              {t("supportFaqTitle")}
            </h2>
            <div className="space-y-6">
              {faq.map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-[#1c1c19] mb-1">{item.q}</h3>
                  <p className="text-sm text-[#56423b]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f1ede8] rounded-xl p-8">
            <h2 className="text-xl font-bold text-[#1c1c19] mb-3">
              {t("supportReqTitle")}
            </h2>
            <ul className="text-sm text-[#56423b] space-y-2 list-disc list-inside">
              {requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
