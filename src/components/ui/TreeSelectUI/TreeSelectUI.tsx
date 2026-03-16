import { TreeSelect as AntTreeSelect, type TreeSelectProps } from "antd";
import styles from "./TreeSelectUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomTreeSelectProps = TreeSelectProps;

export function TreeSelectUI({ className, ...rest }: CustomTreeSelectProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntTreeSelect className={customClasses} {...rest} />;
}
