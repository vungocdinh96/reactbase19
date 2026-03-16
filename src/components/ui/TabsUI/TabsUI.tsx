import { Tabs as AntTabs, type TabsProps } from "antd";
import styles from "./TabsUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomTabsProps = TabsProps;

export function TabsUI({ className, ...rest }: CustomTabsProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntTabs className={customClasses} {...rest} />;
}
