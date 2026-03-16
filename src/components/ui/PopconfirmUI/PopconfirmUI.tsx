import { Popconfirm as AntPopconfirm, type PopconfirmProps } from "antd";
import styles from "./PopconfirmUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomPopconfirmProps = PopconfirmProps;

export function PopconfirmUI({ className, ...rest }: CustomPopconfirmProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntPopconfirm className={customClasses} {...rest} />;
}
