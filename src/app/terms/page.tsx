"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

export default function TermsPage() {
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold text-[#1c1c19] mb-4">
            {t("termsTitle")}
          </h1>
          <p className="text-sm text-[#8a726a] mb-10">
            {t("termsUpdated")}
          </p>

          <div className="prose prose-sm max-w-none text-[#56423b] space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                {t("termsAcceptTitle")}
              </h2>
              <p>{t("termsAcceptDesc")}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                {t("termsLicenseTitle")}
              </h2>
              <p>{t("termsLicenseDesc")}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                {t("termsUseTitle")}
              </h2>
              <p>{t("termsUseDesc")}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                {t("termsWarrantyTitle")}
              </h2>
              <p>{t("termsWarrantyDesc")}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                {t("termsLiabilityTitle")}
              </h2>
              <p>{t("termsLiabilityDesc")}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                {t("termsChangesTitle")}
              </h2>
              <p>{t("termsChangesDesc")}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                {t("termsContactTitle")}
              </h2>
              <p>
                {t("termsContactDesc")}{" "}
                <a
                  href="mailto:info@shamantech.co"
                  className="text-[#9f3f1a] hover:underline"
                >
                  info@shamantech.co
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
