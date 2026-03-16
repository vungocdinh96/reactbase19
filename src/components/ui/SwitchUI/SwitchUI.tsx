import { Switch as AntSwitch, type SwitchProps } from "antd";
import styles from "./SwitchUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomSwitchProps = SwitchProps;

export function SwitchUI({ className, ...rest }: CustomSwitchProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntSwitch className={customClasses} {...rest} />;
}
