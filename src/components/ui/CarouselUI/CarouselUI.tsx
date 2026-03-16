import { Carousel as AntCarousel, type CarouselProps } from "antd";
import styles from "./CarouselUI.module.css";
import { classNames } from "@/utils/classNames";

export type CustomCarouselProps = CarouselProps;

export function CarouselUI({ className, ...rest }: CustomCarouselProps) {
  const customClasses = classNames(styles["custom-component"], className, {});
  return <AntCarousel className={customClasses} {...rest} />;
}
