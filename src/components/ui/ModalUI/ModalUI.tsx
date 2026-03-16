import { Modal as AntModal, type ModalProps } from "antd";
import styles from "./ModalUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomModalProps = ModalProps;

export function ModalUI({ className, ...rest }: CustomModalProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntModal className={customClasses} {...rest} />;
}
