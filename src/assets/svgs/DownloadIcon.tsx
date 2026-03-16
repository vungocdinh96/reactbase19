import type { IIconProps } from "@/types/common";

export default function DownloadIcon({ size = 14, color = "currentColor" }: IIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 12C4 13.8856 4 14.8284 4.58579 15.4142C5.17157 16 6.11438 16 8 16H12C13.8856 16 14.8284 16 15.4142 15.4142C16 14.8284 16 13.8856 16 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0026 4.00033V12.667M10.0026 12.667L12.6693 9.75033M10.0026 12.667L7.33594 9.75033"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
