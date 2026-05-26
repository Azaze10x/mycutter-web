import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SupportPage() {
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
              href="mailto:abaddon.dad@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9f3f1a] text-white rounded-md font-medium hover:bg-[#802a04] transition-colors"
            >
              abaddon.dad@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-[#e6e2dd] mb-8">
            <h2 className="text-xl font-bold text-[#1c1c19] mb-3">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#1c1c19] mb-1">
                  Does mYcutter require an internet connection?
                </h3>
                <p className="text-sm text-[#56423b]">
                  No. mYcutter is designed to work entirely offline. All video
                  processing happens locally on your Mac.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1c1c19] mb-1">
                  Is there a watermark on exported videos?
                </h3>
                <p className="text-sm text-[#56423b]">
                  No. The Mac App Store version of mYcutter exports videos
                  without any watermark.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1c1c19] mb-1">
                  What video formats are supported?
                </h3>
                <p className="text-sm text-[#56423b]">
                  mYcutter supports MP4, MOV, MKV, and WebM for import. Export
                  is available in MP4 with customizable presets.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1c1c19] mb-1">
                  How do I get a refund?
                </h3>
                <p className="text-sm text-[#56423b]">
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
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#f1ede8] rounded-xl p-8">
            <h2 className="text-xl font-bold text-[#1c1c19] mb-3">
              System Requirements
            </h2>
            <ul className="text-sm text-[#56423b] space-y-2 list-disc list-inside">
              <li>macOS 12.0 or later</li>
              <li>Apple Silicon (M1/M2/M3/M4) or Intel Mac</li>
              <li>4 GB RAM minimum (8 GB recommended)</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
