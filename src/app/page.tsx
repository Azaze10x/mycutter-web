import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TypewriterText from "@/components/TypewriterText";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-20 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/mycutter-web/logo.png"
              alt="mYcutter"
              width={120}
              height={120}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-[#1c1c19] mb-4">
            <TypewriterText text="Edit videos offline." speed={80} />
          </h1>
          <p className="text-xl text-[#56423b] max-w-xl mx-auto mb-8">
            <TypewriterText
              text="No sign-in. No cloud. No watermark. Just fast, local video editing on your Mac."
              speed={40}
              delay={1600}
            />
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1c1c19] text-white rounded-md font-medium text-sm">
              <svg className="w-4 h-4" viewBox="0 0 170 170" fill="currentColor">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.1 4.693-7.88 10.832-13.675 18.418-17.4 7.585-3.725 15.751-5.63 24.507-5.63 3.215 0 7.326.763 12.332 2.29 5.006 1.526 8.296 2.296 9.87 2.296 1.215 0 4.593-1.04 10.135-3.12 5.54-2.08 10.22-3.13 14.04-3.13 9.605.31 17.98 3.572 25.12 9.802-8.595 5.21-12.88 12.55-12.85 22.02.03 7.33 2.72 13.42 8.06 18.28 4.38 3.97 9.36 6.23 14.96 6.81-1.2 5.11-3.08 10.02-5.62 14.73zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.697-7.12 8.324-15.732 13.134-25.144 12.375-.12-.998-.19-2.05-.19-3.16 0-7.74 3.37-16.04 9.35-24.06 2.99-4.32 6.78-7.86 11.38-10.61 4.59-2.71 8.92-4.17 12.99-4.36.13 1.43.19 2.85.19 4.27-.01.01-.03.01-.04.01-.01 0-.03 0-.04-.01z"/>
              </svg>
              Coming Soon on Mac App Store
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e6e2dd] text-[#56423b] rounded-md font-medium text-sm border border-[#ddc0b7]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
              </svg>
              Coming Soon for Windows
            </span>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#f1ede8] py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center text-[#1c1c19] mb-10">
              Everything you need
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Offline First",
                  desc: "Works without an internet connection. Your footage never leaves your machine.",
                },
                {
                  title: "Timeline Editing",
                  desc: "Split, trim, and rearrange clips with an intuitive timeline interface.",
                },
                {
                  title: "Color Correction",
                  desc: "Professional-grade lift, gamma, and gain wheels for precise color grading.",
                },
                {
                  title: "Keyframe Animation",
                  desc: "Animate any property with precise keyframe control.",
                },
                {
                  title: "Title & Text",
                  desc: "Add professional titles and text overlays to your videos.",
                },
                {
                  title: "Fast Export",
                  desc: "Export to MP4 with customizable presets powered by bundled ffmpeg.",
                },
              ].map((f) => (
                <div
                  key={f.title}
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
            Ready to start editing?
          </h2>
          <p className="text-[#56423b] mb-8">
            Download mYcutter from the Mac App Store today.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#9f3f1a] text-white rounded-md font-medium hover:bg-[#802a04] transition-colors"
          >
            Get Support
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
