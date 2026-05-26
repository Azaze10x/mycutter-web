import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold text-[#1c1c19] mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-[#8a726a] mb-10">
            Last updated: May 26, 2026
          </p>

          <div className="prose prose-sm max-w-none text-[#56423b] space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By downloading, installing, or using mYcutter, you agree to be
                bound by these Terms of Service. If you do not agree to these
                terms, please do not use the application.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                2. License
              </h2>
              <p>
                mYcutter is licensed to you under the terms of the Mac App Store
                End User License Agreement (EULA). Your purchase grants you a
                non-exclusive, non-transferable license to use the application on
                Mac devices associated with your Apple ID.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                3. Use of the Application
              </h2>
              <p>
                mYcutter is an offline video editing tool. You are responsible
                for ensuring that your use of the application complies with all
                applicable laws and regulations, including copyright laws related
                to the video content you edit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                4. No Warranty
              </h2>
              <p>
                mYcutter is provided &ldquo;as is&rdquo; without warranties of
                any kind, either express or implied. While we strive to ensure
                the application functions correctly, we do not guarantee that it
                will meet your specific requirements or be free from errors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                5. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, mYcutter and its
                developers shall not be liable for any direct, indirect,
                incidental, special, consequential, or punitive damages arising
                from your use of the application.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                6. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Any
                changes will be effective immediately upon posting. Continued use
                of mYcutter after changes constitutes acceptance of the revised
                terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                7. Contact
              </h2>
              <p>
                For questions about these terms, please contact us at{" "}
                <a
                  href="mailto:abaddon.dad@gmail.com"
                  className="text-[#9f3f1a] hover:underline"
                >
                  abaddon.dad@gmail.com
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
