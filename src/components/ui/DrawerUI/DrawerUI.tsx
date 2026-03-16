import { Drawer as AntDrawer, type DrawerProps } from "antd";
import styles from "./DrawerUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomDrawerProps = DrawerProps;

export function DrawerUI({ className, ...rest }: CustomDrawerProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntDrawer className={customClasses} {...rest} />;
}
