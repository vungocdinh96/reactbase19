import type { ComponentProps } from "react";
import { Typography as AntTypography } from "antd";
import styles from "./TypographyUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomTypographyProps = ComponentProps<typeof AntTypography>;

export function TypographyUI({ className, ...rest }: CustomTypographyProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntTypography className={customClasses} {...rest} />;
}
