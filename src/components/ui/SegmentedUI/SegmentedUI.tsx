import { Segmented as AntSegmented, type SegmentedProps } from "antd";
import styles from "./SegmentedUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomSegmentedProps = SegmentedProps;

export function SegmentedUI({ className, ...rest }: CustomSegmentedProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntSegmented className={customClasses} {...rest} />;
}
