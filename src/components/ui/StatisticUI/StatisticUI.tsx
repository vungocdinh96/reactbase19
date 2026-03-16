import { Statistic as AntStatistic, type StatisticProps } from "antd";
import styles from "./StatisticUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomStatisticProps = StatisticProps;

export function StatisticUI({ className, ...rest }: CustomStatisticProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntStatistic className={customClasses} {...rest} />;
}
