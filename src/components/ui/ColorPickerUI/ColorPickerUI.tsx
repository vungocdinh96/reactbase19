import { ColorPicker as AntColorPicker, type ColorPickerProps } from "antd";
import styles from "./ColorPickerUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomColorPickerProps = ColorPickerProps;

export function ColorPickerUI({ className, ...rest }: CustomColorPickerProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntColorPicker className={customClasses} {...rest} />;
}
