import { Select as AntSelect, type SelectProps } from "antd";
import styles from "./SelectUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomSelectProps = SelectProps;

export function SelectUI({ className, ...rest }: CustomSelectProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntSelect className={customClasses} {...rest} />;
}
