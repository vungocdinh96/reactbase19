import { Progress as AntProgress, type ProgressProps } from "antd";
import styles from "./ProgressUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomProgressProps = ProgressProps;

export function ProgressUI({ className, ...rest }: CustomProgressProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntProgress className={customClasses} {...rest} />;
}
