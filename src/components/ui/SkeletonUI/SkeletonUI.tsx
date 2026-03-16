import { Skeleton as AntSkeleton, type SkeletonProps } from "antd";
import styles from "./SkeletonUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomSkeletonProps = SkeletonProps;

export function SkeletonUI({ className, ...rest }: CustomSkeletonProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntSkeleton className={customClasses} {...rest} />;
}
