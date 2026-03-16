import { Cascader as AntCascader, type CascaderProps } from "antd";
import styles from "./CascaderUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomCascaderProps = CascaderProps;

export function CascaderUI({ className, ...rest }: CustomCascaderProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <AntCascader className={customClasses} {...(rest as any)} />;
}
