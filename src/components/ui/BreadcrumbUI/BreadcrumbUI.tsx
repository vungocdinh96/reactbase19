import { Breadcrumb as AntBreadcrumb, type BreadcrumbProps } from "antd";
import styles from "./BreadcrumbUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomBreadcrumbProps = BreadcrumbProps;

export function BreadcrumbUI({ className, ...rest }: CustomBreadcrumbProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntBreadcrumb className={customClasses} {...rest} />;
}
