import { Dropdown as AntDropdown, type DropdownProps } from "antd";
import styles from "./DropdownUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomDropdownProps = DropdownProps;

export function DropdownUI({ className, ...rest }: CustomDropdownProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntDropdown className={customClasses} {...rest} />;
}
