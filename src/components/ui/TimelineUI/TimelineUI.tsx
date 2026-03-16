import { Timeline as AntTimeline, type TimelineProps } from "antd";
import styles from "./TimelineUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomTimelineProps = TimelineProps;

export function TimelineUI({ className, ...rest }: CustomTimelineProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntTimeline className={customClasses} {...rest} />;
}
