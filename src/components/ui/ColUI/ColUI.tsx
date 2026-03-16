import { Col as AntCol, type ColProps } from "antd";
import styles from "./ColUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomColProps = ColProps;

export function ColUI({ className, ...rest }: CustomColProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntCol className={customClasses} {...rest} />;
}
