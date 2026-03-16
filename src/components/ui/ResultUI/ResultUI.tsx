import { Result as AntResult, type ResultProps } from "antd";
import styles from "./ResultUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomResultProps = ResultProps;

export function ResultUI({ className, ...rest }: CustomResultProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntResult className={customClasses} {...rest} />;
}
