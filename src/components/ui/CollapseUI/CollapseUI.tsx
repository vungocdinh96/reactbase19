import { Collapse as AntCollapse, type CollapseProps } from "antd";
import styles from "./CollapseUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomCollapseProps = CollapseProps;

export function CollapseUI({ className, ...rest }: CustomCollapseProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntCollapse className={customClasses} {...rest} />;
}
