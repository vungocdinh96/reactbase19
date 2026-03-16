import { Button as AntButton, type ButtonProps } from "antd";
import styles from "./ButtonUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomButtonProps = ButtonProps;

export function ButtonUI({ className, ...rest }: CustomButtonProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntButton className={customClasses} {...rest} />;
}
