"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Platform = "mac" | "windows";

const macFAQ = [
  {
    q: "Does mYcutter require an internet connection?",
    a: "No. mYcutter is designed to work entirely offline. All video processing happens locally on your machine.",
  },
  {
    q: "Is there a watermark on exported videos?",
    a: "No. The Mac App Store version of mYcutter exports videos without any watermark.",
  },
  {
    q: "What video formats are supported?",
    a: "mYcutter supports MP4, MOV, MKV, and WebM for import. Export is available in MP4 with customizable presets.",
  },
  {
    q: "How do I get a refund?",
    a: (
      <>
        Refunds are handled by Apple. Please visit{" "}
        <a
          href="https://reportaproblem.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9f3f1a] hover:underline"
        >
          reportaproblem.apple.com
        </a>{" "}
        to request a refund.
      </>
    ),
  },
];

const windowsFAQ = [
  {
    q: "When will mYcutter be available on Windows?",
    a: "Coming soon. We're working hard to bring mYcutter to Windows. Check back here for updates.",
  },
  {
    q: "Will my Mac projects work on Windows?",
    a: "Yes. mYcutter project files (.mycutter) are cross-platform and will work seamlessly on both macOS and Windows.",
  },
  {
    q: "What video formats will be supported?",
    a: "Windows version will support the same formats: MP4, MOV, MKV, and WebM for import, with MP4 export.",
  },
  {
    q: "Will there be a watermark?",
    a: "No. Just like the Mac version, the Windows version will export videos without any watermark.",
  },
];

const macRequirements = [
  "macOS 12.0 or later",
  "Apple Silicon (M1/M2/M3/M4) or Intel Mac",
  "4 GB RAM minimum (8 GB recommended)",
];

const windowsRequirements = [
  "Windows 10 or later",
  "64-bit processor (Intel or AMD)",
  "4 GB RAM minimum (8 GB recommended)",
];

export default function SupportPage() {
  const [platform, setPlatform] = useState<Platform>("mac");

  const faq = platform === "mac" ? macFAQ : windowsFAQ;
  const requirements =
    platform === "mac" ? macRequirements : windowsRequirements;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold text-[#1c1c19] mb-4">
            Support
          </h1>
          <p className="text-[#56423b] mb-10">
            Need help with mYcutter? We&apos;re here for you.
          </p>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-[#e6e2dd] mb-8">
            <h2 className="text-xl font-bold text-[#1c1c19] mb-3">
              Contact Us
            </h2>
            <p className="text-[#56423b] mb-4">
              For support inquiries, feature requests, or bug reports, please
              email us directly.
            </p>
            <a
              href="mailto:info@mycutter.app"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9f3f1a] text-white rounded-md font-medium hover:bg-[#802a04] transition-colors"
            >
              info@mycutter.app
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
              macOS
            </button>
            <button
              onClick={() => setPlatform("windows")}
              className={`px-4 py-2 rounded-md font-medium text-sm transition-colors inline-flex items-center gap-2 ${
                platform === "windows"
                  ? "bg-[#0078D4] text-white"
                  : "bg-[#e6e2dd] text-[#56423b] opacity-60 hover:opacity-80"
              }`}
            >
              Windows
              <span className="text-[10px] uppercase tracking-wider bg-white/20 px-1.5 py-0.5 rounded">
                Soon
              </span>
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-[#e6e2dd] mb-8">
            <h2 className="text-xl font-bold text-[#1c1c19] mb-3">
              Frequently Asked Questions
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
              System Requirements
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
