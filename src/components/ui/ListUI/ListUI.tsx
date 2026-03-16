import { List as AntList, type ListProps } from "antd";
import styles from "./ListUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomListProps = ListProps<unknown>;

export function ListUI({ className, ...rest }: CustomListProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntList className={customClasses} {...rest} />;
}
