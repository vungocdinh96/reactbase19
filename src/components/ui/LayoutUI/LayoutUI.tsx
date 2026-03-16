import { Layout as AntLayout, type LayoutProps } from "antd";
import styles from "./LayoutUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomLayoutProps = LayoutProps;

export function LayoutUI({ className, ...rest }: CustomLayoutProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntLayout className={customClasses} {...rest} />;
}
