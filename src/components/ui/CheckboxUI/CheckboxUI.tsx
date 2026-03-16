import { Checkbox as AntCheckbox, type CheckboxProps } from "antd";
import styles from "./CheckboxUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomCheckboxProps = CheckboxProps;

export function CheckboxUI({ className, ...rest }: CustomCheckboxProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntCheckbox className={customClasses} {...rest} />;
}
