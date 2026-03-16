import { Image as AntImage, type ImageProps } from "antd";
import styles from "./ImageUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomImageProps = ImageProps;

export function ImageUI({ className, ...rest }: CustomImageProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntImage className={customClasses} {...rest} />;
}
