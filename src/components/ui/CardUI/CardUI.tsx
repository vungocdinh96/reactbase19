import { Card as AntCard, type CardProps } from "antd";
import styles from "./CardUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomCardProps = CardProps;

export function CardUI({ className, ...rest }: CustomCardProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntCard className={customClasses} {...rest} />;
}
