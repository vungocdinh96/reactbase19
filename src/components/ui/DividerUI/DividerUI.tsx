import { Divider as AntDivider, type DividerProps } from "antd";
import styles from "./DividerUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomDividerProps = DividerProps;

export function DividerUI({ className, ...rest }: CustomDividerProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntDivider className={customClasses} {...rest} />;
}
