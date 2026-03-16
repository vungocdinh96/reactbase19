import { QRCode as AntQRCode, type QRCodeProps } from "antd";
import styles from "./QRCodeUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomQRCodeProps = QRCodeProps;

export function QRCodeUI({ className, ...rest }: CustomQRCodeProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntQRCode className={customClasses} {...rest} />;
}
