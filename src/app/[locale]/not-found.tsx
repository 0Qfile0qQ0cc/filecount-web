import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("common");

  return (
    <main id="main-content" className="flex min-h-dvh items-center justify-center">
      <p className="text-muted-foreground">{t("appName")}</p>
    </main>
  );
}
