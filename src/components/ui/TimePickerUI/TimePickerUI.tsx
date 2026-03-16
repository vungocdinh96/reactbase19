import { TimePicker as AntTimePicker, type TimePickerProps } from "antd";
import styles from "./TimePickerUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomTimePickerProps = TimePickerProps;

export function TimePickerUI({ className, ...rest }: CustomTimePickerProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntTimePicker className={customClasses} {...rest} />;
}
