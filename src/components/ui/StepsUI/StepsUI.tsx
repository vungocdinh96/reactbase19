import { Steps as AntSteps, type StepsProps } from "antd";
import styles from "./StepsUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomStepsProps = StepsProps;

export function StepsUI({ className, ...rest }: CustomStepsProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntSteps className={customClasses} {...rest} />;
}
