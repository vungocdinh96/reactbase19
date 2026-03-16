import { Avatar as AntAvatar, type AvatarProps } from "antd";
import styles from "./AvatarUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomAvatarProps = AvatarProps;

export function AvatarUI({ className, ...rest }: CustomAvatarProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntAvatar className={customClasses} {...rest} />;
}
