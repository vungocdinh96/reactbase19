import { Transfer as AntTransfer, type TransferProps } from "antd";
import styles from "./TransferUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomTransferProps = TransferProps;

export function TransferUI({ className, ...rest }: CustomTransferProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntTransfer className={customClasses} {...rest} />;
}
