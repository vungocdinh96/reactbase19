import { Radio as AntRadio, type RadioProps } from "antd";
import styles from "./RadioUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomRadioProps = RadioProps;

export function RadioUI({ className, ...rest }: CustomRadioProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntRadio className={customClasses} {...rest} />;
}
