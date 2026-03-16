import { Calendar as AntCalendar, type CalendarProps } from "antd";
import styles from "./CalendarUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomCalendarProps = CalendarProps<any>;

export function CalendarUI({ className, ...rest }: CustomCalendarProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntCalendar className={customClasses} {...rest} />;
}
