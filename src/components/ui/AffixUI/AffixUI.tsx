import { Affix as AntAffix, type AffixProps } from "antd";
import styles from "./AffixUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomAffixProps = AffixProps;

export function AffixUI({ className, ...rest }: CustomAffixProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntAffix className={customClasses} {...rest} />;
}
