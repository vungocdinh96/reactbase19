import { Upload as AntUpload, type UploadProps } from "antd";
import styles from "./UploadUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomUploadProps = UploadProps;

export function UploadUI({ className, ...rest }: CustomUploadProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntUpload className={customClasses} {...rest} />;
}
