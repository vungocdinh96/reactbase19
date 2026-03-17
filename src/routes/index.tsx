import { ThemeToggle } from "@/components/features/ThemeToggle";
import { LanguageSwitcher } from "@/components/features/LanguageSwitcher";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>

      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-3xl font-bold">{t("appName")}</h1>
        <p className="text-sm text-neutral-500">
          {i18n.language === "vi" ? "Ngôn ngữ hiện tại" : "Current locale"}: <span className="font-medium uppercase">{i18n.language}</span>
        </p>
      </div>

      <div className="flex gap-2">
        <button className="px-4 py-2 rounded bg-primary-500 text-white">{t("buttons.save")}</button>
        <button className="px-4 py-2 rounded bg-neutral-200">{t("buttons.cancel")}</button>
        <button className="px-4 py-2 rounded border border-error-500 text-error-500">{t("buttons.delete")}</button>
      </div>

      <div className="text-sm text-neutral-400 flex flex-col gap-1 items-center">
        <span>{t("validation.required")}</span>
        <span>{t("validation.minLength", { min: 8 })}</span>
      </div>
    </div>
  );
}
