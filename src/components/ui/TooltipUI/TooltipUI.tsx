import { Tooltip as AntTooltip, type TooltipProps } from "antd";
import styles from "./TooltipUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomTooltipProps = TooltipProps;

export function TooltipUI({ className, ...rest }: CustomTooltipProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntTooltip className={customClasses} {...rest} />;
}
