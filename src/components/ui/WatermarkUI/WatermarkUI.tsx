import { Watermark as AntWatermark, type WatermarkProps } from "antd";
import styles from "./WatermarkUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomWatermarkProps = WatermarkProps;

export function WatermarkUI({ className, ...rest }: CustomWatermarkProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntWatermark className={customClasses} {...rest} />;
}
