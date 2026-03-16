import { Input as AntInput, type InputProps } from "antd";
import styles from "./InputUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomInputProps = InputProps;

export function InputUI({ className, ...rest }: CustomInputProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntInput className={customClasses} {...rest} />;
}
