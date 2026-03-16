import { Badge as AntBadge, type BadgeProps } from "antd";
import styles from "./BadgeUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomBadgeProps = BadgeProps;

export function BadgeUI({ className, ...rest }: CustomBadgeProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntBadge className={customClasses} {...rest} />;
}
