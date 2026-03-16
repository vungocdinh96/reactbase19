import { Popover as AntPopover, type PopoverProps } from "antd";
import styles from "./PopoverUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomPopoverProps = PopoverProps;

export function PopoverUI({ className, ...rest }: CustomPopoverProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntPopover className={customClasses} {...rest} />;
}
