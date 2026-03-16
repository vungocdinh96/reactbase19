import { Row as AntRow, type RowProps } from "antd";
import styles from "./RowUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomRowProps = RowProps;

export function RowUI({ className, ...rest }: CustomRowProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntRow className={customClasses} {...rest} />;
}
