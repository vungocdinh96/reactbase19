import { Splitter as AntSplitter, type SplitterProps } from "antd";
import styles from "./SplitterUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomSplitterProps = SplitterProps;

export function SplitterUI({ className, ...rest }: CustomSplitterProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntSplitter className={customClasses} {...rest} />;
}
