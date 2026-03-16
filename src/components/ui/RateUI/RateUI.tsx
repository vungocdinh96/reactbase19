import { Rate as AntRate, type RateProps } from "antd";
import styles from "./RateUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomRateProps = RateProps;

export function RateUI({ className, ...rest }: CustomRateProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntRate className={customClasses} {...rest} />;
}
