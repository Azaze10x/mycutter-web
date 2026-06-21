"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

export default function PrivacyPage() {
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold text-[#1c1c19] mb-4">
            {t("privacyTitle")}
          </h1>
          <p className="text-sm text-[#8a726a] mb-10">
            {t("privacyUpdated")}
          </p>

          <div className="prose prose-sm max-w-none text-[#56423b] space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                {t("privacyNoDataTitle")}
              </h2>
              <p>{t("privacyNoDataDesc")}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                {t("privacyOfflineTitle")}
              </h2>
              <p>{t("privacyOfflineDesc")}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                {t("privacyNoAccountsTitle")}
              </h2>
              <p>{t("privacyNoAccountsDesc")}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                {t("privacyLocalTitle")}
              </h2>
              <p>{t("privacyLocalDesc")}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1c1c19] mb-2">
                {t("privacyContactTitle")}
              </h2>
              <p>
                {t("privacyContactDesc")}{" "}
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
