import { Tour as AntTour, type TourProps } from "antd";
import styles from "./TourUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomTourProps = TourProps;

export function TourUI({ className, ...rest }: CustomTourProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntTour className={customClasses} {...rest} />;
}
