import { AutoComplete as AntAutoComplete, type AutoCompleteProps } from "antd";
import styles from "./AutoCompleteUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomAutoCompleteProps = AutoCompleteProps;

export function AutoCompleteUI({ className, ...rest }: CustomAutoCompleteProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntAutoComplete className={customClasses} {...rest} />;
}
