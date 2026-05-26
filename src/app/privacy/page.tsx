import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold text-[#1c1c19] mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#8a726a] mb-10">
            Last updated: May 26, 2026
          </p>

          <div className="prose prose-sm max-w-none text-[#56423b] space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                No Data Collection
              </h2>
              <p>
                mYcutter does not collect, store, or transmit any personal data.
                The app operates entirely offline and all video processing is
                performed locally on your Mac.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                Offline-Only Operation
              </h2>
              <p>
                mYcutter is designed to function without an internet connection.
                The app does not make any network requests, does not use
                analytics, and does not include any telemetry or tracking
                mechanisms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                No User Accounts
              </h2>
              <p>
                mYcutter does not require user registration or authentication.
                There are no accounts, passwords, or user profiles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                Local File Handling
              </h2>
              <p>
                All files you import into mYcutter remain on your local machine.
                The app does not upload your videos, thumbnails, or project files
                to any external server.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                Contact
              </h2>
              <p>
                If you have any questions about this privacy policy, please
                contact us at{" "}
                <a
                  href="mailto:info@mycutter.app"
                  className="text-[#9f3f1a] hover:underline"
                >
                  info@mycutter.app
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
