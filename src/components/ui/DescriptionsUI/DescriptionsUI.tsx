import { Descriptions as AntDescriptions, type DescriptionsProps } from "antd";
import styles from "./DescriptionsUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomDescriptionsProps = DescriptionsProps;

export function DescriptionsUI({ className, ...rest }: CustomDescriptionsProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntDescriptions className={customClasses} {...rest} />;
}
