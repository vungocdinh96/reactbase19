import { Empty as AntEmpty, type EmptyProps } from "antd";
import styles from "./EmptyUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomEmptyProps = EmptyProps;

export function EmptyUI({ className, ...rest }: CustomEmptyProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntEmpty className={customClasses} {...rest} />;
}
