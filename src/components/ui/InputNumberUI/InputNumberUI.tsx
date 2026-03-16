import { InputNumber as AntInputNumber, type InputNumberProps } from "antd";
import styles from "./InputNumberUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomInputNumberProps = InputNumberProps;

export function InputNumberUI({ className, ...rest }: CustomInputNumberProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntInputNumber className={customClasses} {...rest} />;
}
