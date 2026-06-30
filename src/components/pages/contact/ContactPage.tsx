import { ContactSection } from "@/components/sections/contact/ContactSection";
import { ContactStructuredData } from "@/components/sections/contact/ContactStructuredData";
import { Footer } from "@/components/sections/footer";
import type { Locale } from "@/types/locale";

type ContactPageProps = {
  locale: Locale;
};

export function ContactPage({ locale }: ContactPageProps) {
  return (
    <>
      <ContactStructuredData locale={locale} />
      <main id="main-content">
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
