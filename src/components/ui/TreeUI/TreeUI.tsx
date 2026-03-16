import { Tree as AntTree, type TreeProps } from "antd";
import styles from "./TreeUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomTreeProps = TreeProps;

export function TreeUI({ className, ...rest }: CustomTreeProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntTree className={customClasses} {...rest} />;
}
