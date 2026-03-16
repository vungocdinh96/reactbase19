import { Tag as AntTag, type TagProps } from "antd";
import styles from "./TagUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomTagProps = TagProps;

export function TagUI({ className, ...rest }: CustomTagProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntTag className={customClasses} {...rest} />;
}
