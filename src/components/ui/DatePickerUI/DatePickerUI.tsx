import { DatePicker as AntDatePicker, type DatePickerProps } from "antd";
import styles from "./DatePickerUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomDatePickerProps = DatePickerProps;

export function DatePickerUI({ className, ...rest }: CustomDatePickerProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntDatePicker className={customClasses} {...rest} />;
}
