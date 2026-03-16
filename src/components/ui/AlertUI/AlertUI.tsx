import { Alert as AntAlert, type AlertProps } from "antd";
import styles from "./AlertUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomAlertProps = AlertProps;

export function AlertUI({ className, ...rest }: CustomAlertProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntAlert className={customClasses} {...rest} />;
}
