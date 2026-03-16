import type { ComponentProps } from "react";
import { Form as AntForm } from "antd";
import styles from "./FormUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomFormProps = ComponentProps<typeof AntForm>;

export function FormUI({ className, ...rest }: CustomFormProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntForm className={customClasses} {...rest} />;
}
