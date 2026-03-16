import { FloatButton as AntFloatButton, type FloatButtonProps } from "antd";
import styles from "./FloatButtonUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomFloatButtonProps = FloatButtonProps;

export function FloatButtonUI({ className, ...rest }: CustomFloatButtonProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntFloatButton className={customClasses} {...rest} />;
}
