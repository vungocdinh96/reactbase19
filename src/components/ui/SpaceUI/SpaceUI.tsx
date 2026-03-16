import { Space as AntSpace, type SpaceProps } from "antd";
import styles from "./SpaceUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomSpaceProps = SpaceProps;

export function SpaceUI({ className, ...rest }: CustomSpaceProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntSpace className={customClasses} {...rest} />;
}
