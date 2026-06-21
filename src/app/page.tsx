"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TypewriterText from "@/components/TypewriterText";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { t } = useI18n();

  const MAC_APP_STORE_URL =
    "https://apps.apple.com/th/app/mycutter/id6773277273?mt=12";

  const formats: { key: string; w: number; h: number; resolution: string; labelKey: string }[] = [
    { key: "landscape", w: 24, h: 14, resolution: "1920×1080", labelKey: "formatLandscape" },
    { key: "portrait", w: 14, h: 24, resolution: "1080×1920", labelKey: "formatPortrait" },
    { key: "square", w: 18, h: 18, resolution: "1080×1080", labelKey: "formatSquare" },
    { key: "instagram", w: 16, h: 20, resolution: "1080×1350", labelKey: "formatInstagram" },
  ];

  const features = [
    {
      key: "featOffline",
      title: t("featOfflineTitle"),
      desc: t("featOfflineDesc"),
    },
    {
      key: "featTimeline",
      title: t("featTimelineTitle"),
      desc: t("featTimelineDesc"),
    },
    {
      key: "featColor",
      title: t("featColorTitle"),
      desc: t("featColorDesc"),
    },
    {
      key: "featKeyframe",
      title: t("featKeyframeTitle"),
      desc: t("featKeyframeDesc"),
    },
    {
      key: "featTitleText",
      title: t("featTitleTextTitle"),
      desc: t("featTitleTextDesc"),
    },
    {
      key: "featExport",
      title: t("featExportTitle"),
      desc: t("featExportDesc"),
    },
    {
      key: "featMultilang",
      title: t("featMultilangTitle"),
      desc: t("featMultilangDesc"),
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-20 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="mYcutter"
              width={120}
              height={120}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-[#1c1c19] mb-4">
            <TypewriterText text={t("heroTitle")} speed={80} />
          </h1>
          <p className="text-xl text-[#56423b] max-w-xl mx-auto mb-8">
            <TypewriterText
              text={t("heroSubtitle")}
              speed={40}
              delay={1600}
            />
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href={MAC_APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1c1c19] text-white rounded-md font-medium text-sm hover:bg-[#3a3a35] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 170 170" fill="currentColor">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.1 4.693-7.88 10.832-13.675 18.418-17.4 7.585-3.725 15.751-5.63 24.507-5.63 3.215 0 7.326.763 12.332 2.29 5.006 1.526 8.296 2.296 9.87 2.296 1.215 0 4.593-1.04 10.135-3.12 5.54-2.08 10.22-3.13 14.04-3.13 9.605.31 17.98 3.572 25.12 9.802-8.595 5.21-12.88 12.55-12.85 22.02.03 7.33 2.72 13.42 8.06 18.28 4.38 3.97 9.36 6.23 14.96 6.81-1.2 5.11-3.08 10.02-5.62 14.73zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.697-7.12 8.324-15.732 13.134-25.144 12.375-.12-.998-.19-2.05-.19-3.16 0-7.74 3.37-16.04 9.35-24.06 2.99-4.32 6.78-7.86 11.38-10.61 4.59-2.71 8.92-4.17 12.99-4.36.13 1.43.19 2.85.19 4.27-.01.01-.03.01-.04.01-.01 0-.03 0-.04-.01z"/>
              </svg>
              {t("badgeMac")}
            </a>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e6e2dd] text-[#56423b] rounded-md font-medium text-sm border border-[#ddc0b7]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
              </svg>
              {t("badgeWin")}
            </span>
          </div>

          {/* Hero Image */}
          <div className="mt-12 flex justify-center">
            <Image
              src="/hero.png"
              alt="mYcutter video editor on a desktop"
              width={900}
              height={600}
              className="rounded-xl shadow-2xl border border-[#e6e2dd]"
              priority
            />
          </div>
        </section>

        {/* Choose Format */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-label text-[11px] font-bold text-[#56423b] uppercase tracking-wider mb-6 text-center">
            {t("chooseFormatTitle")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {formats.map((f) => (
              <div
                key={f.key}
                className="flex flex-col items-center gap-2 p-5 rounded-xl border border-[#ddc0b7] bg-white hover:border-[#9f3f1a] hover:shadow-md transition-all"
              >
                <div
                  className="border-2 border-[#ddc0b7] rounded-sm"
                  style={{ width: `${f.w * 2}px`, height: `${f.h * 2}px` }}
                />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1c1c19]">
                  {t(f.labelKey)}
                </span>
                <span className="text-[11px] text-[#8a726a]">{f.resolution}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#f1ede8] py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center text-[#1c1c19] mb-10">
              {t("featuresTitle")}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((f) => (
                <div
                  key={f.key}
                  className="bg-white rounded-xl p-6 shadow-sm border border-[#e6e2dd]"
                >
                  <h3 className="font-bold text-[#1c1c19] mb-2">{f.title}</h3>
                  <p className="text-sm text-[#56423b] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-[#1c1c19] mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-[#56423b] mb-8">
            {t("ctaSubtitle")}
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href={MAC_APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#9f3f1a] text-white rounded-md font-medium hover:bg-[#802a04] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 170 170" fill="currentColor">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.1 4.693-7.88 10.832-13.675 18.418-17.4 7.585-3.725 15.751-5.63 24.507-5.63 3.215 0 7.326.763 12.332 2.29 5.006 1.526 8.296 2.296 9.87 2.296 1.215 0 4.593-1.04 10.135-3.12 5.54-2.08 10.22-3.13 14.04-3.13 9.605.31 17.98 3.572 25.12 9.802-8.595 5.21-12.88 12.55-12.85 22.02.03 7.33 2.72 13.42 8.06 18.28 4.38 3.97 9.36 6.23 14.96 6.81-1.2 5.11-3.08 10.02-5.62 14.73zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.697-7.12 8.324-15.732 13.134-25.144 12.375-.12-.998-.19-2.05-.19-3.16 0-7.74 3.37-16.04 9.35-24.06 2.99-4.32 6.78-7.86 11.38-10.61 4.59-2.71 8.92-4.17 12.99-4.36.13 1.43.19 2.85.19 4.27-.01.01-.03.01-.04.01-.01 0-.03 0-.04-.01z"/>
              </svg>
              {t("ctaDownloadMac")}
            </a>
            <Link
              href="/support"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#ddc0b7] text-[#56423b] rounded-md font-medium hover:bg-[#f1ede8] transition-colors"
            >
              {t("ctaButton")}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
