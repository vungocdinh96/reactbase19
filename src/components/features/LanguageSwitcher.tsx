import { useTranslation } from "react-i18next";
import CommonStyles from "@/components/ui";

const LANGUAGES = [
  { value: "vi", label: "Tiếng Việt" },
  { value: "en", label: "English" },
] as const;

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return <CommonStyles.SelectUI value={i18n.language} options={[...LANGUAGES]} onChange={value => i18n.changeLanguage(value)} />;
}
