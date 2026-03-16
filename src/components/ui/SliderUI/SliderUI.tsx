import type { ComponentProps } from "react";
import { Slider as AntSlider } from "antd";
import styles from "./SliderUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomSliderProps = ComponentProps<typeof AntSlider>;

export function SliderUI({ className, ...rest }: CustomSliderProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntSlider className={customClasses} {...rest} />;
}
