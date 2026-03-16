import { Table as AntTable, type TableProps } from "antd";
import styles from "./TableUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomTableProps = TableProps;

export function TableUI({ className, ...rest }: CustomTableProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntTable className={customClasses} {...rest} />;
}
