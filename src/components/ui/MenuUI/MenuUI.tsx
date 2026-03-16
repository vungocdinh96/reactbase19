import { Menu as AntMenu, type MenuProps } from "antd";
import styles from "./MenuUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomMenuProps = MenuProps;

export function MenuUI({ className, ...rest }: CustomMenuProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntMenu className={customClasses} {...rest} />;
}
