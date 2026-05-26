import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
            Edit videos offline.
          </h1>
          <p className="text-xl text-[#56423b] max-w-xl mx-auto mb-8">
            No sign-in. No cloud. No watermark. Just fast, local video editing on
            your Mac.
          </p>
          <div className="flex justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9f3f1a] text-white rounded-md font-medium text-sm">
              Available on the Mac App Store
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
