import { Mentions as AntMentions, type MentionsProps } from "antd";
import styles from "./MentionsUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomMentionsProps = MentionsProps;

export function MentionsUI({ className, ...rest }: CustomMentionsProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntMentions className={customClasses} {...rest} />;
}
