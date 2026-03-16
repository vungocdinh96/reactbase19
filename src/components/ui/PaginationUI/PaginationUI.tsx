import { Pagination as AntPagination, type PaginationProps } from "antd";
import styles from "./PaginationUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomPaginationProps = PaginationProps;

export function PaginationUI({ className, ...rest }: CustomPaginationProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntPagination className={customClasses} {...rest} />;
}
