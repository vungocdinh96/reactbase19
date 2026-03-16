import { Masonry as AntMasonry, type MasonryProps } from "antd";
import styles from "./MasonryUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomMasonryProps = MasonryProps;

export function MasonryUI({ className, ...rest }: CustomMasonryProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntMasonry className={customClasses} {...rest} />;
}
