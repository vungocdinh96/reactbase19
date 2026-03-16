import { Anchor as AntAnchor, type AnchorProps } from "antd";
import styles from "./AnchorUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomAnchorProps = AnchorProps;

export function AnchorUI({ className, ...rest }: CustomAnchorProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntAnchor className={customClasses} {...rest} />;
}
