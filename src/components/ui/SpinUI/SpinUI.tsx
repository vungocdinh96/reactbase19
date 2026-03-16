import { Spin as AntSpin, type SpinProps } from "antd";
import styles from "./SpinUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomSpinProps = SpinProps;

export function SpinUI({ className, ...rest }: CustomSpinProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntSpin className={customClasses} {...rest} />;
}
