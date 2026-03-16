import { Flex as AntFlex, type FlexProps } from "antd";
import styles from "./FlexUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomFlexProps = FlexProps;

export function FlexUI({ className, ...rest }: CustomFlexProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntFlex className={customClasses} {...rest} />;
}
