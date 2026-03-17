import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { MainContext } from "@/providers/MainProvider/MainContext";
import { updateSelectedTheme } from "@/store/globalSlice";
import CONSTANTS from "@/utils/constants";
import { SafeLocalStorage } from "@/utils/safeStorage";
import React, { useContext, useSyncExternalStore } from "react";

function setThemeTransition(direction: "back" | "forward") {
  document.documentElement.setAttribute("data-theme-transition", direction);
}

function clearThemeTransition() {
  document.documentElement.removeAttribute("data-theme-transition");
}

export function ThemeToggle() {
  const dispatch = useAppDispatch();
  const mainContext = useContext(MainContext);
  const selectedTheme = useAppSelector(state => state.global.selectedTheme);

  const ref = React.useRef<HTMLDivElement>(null);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) return null;

  const handleThemeChange = (newTheme: string) => {
    SafeLocalStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEYS.THEME, newTheme, CONSTANTS.LOCAL_STORAGE_KEYS.THEME);

    if (!document.startViewTransition) {
      dispatch(updateSelectedTheme(newTheme));
      return;
    }

    const isBack = newTheme === "light";
    setThemeTransition(isBack ? "back" : "forward");

    const rect = ref.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    const endRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const transition = document.startViewTransition(() => {
      dispatch(updateSelectedTheme(newTheme));
    });

    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
      document.documentElement.animate(
        { clipPath: isBack ? [...clipPath].reverse() : clipPath },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: isBack ? "::view-transition-old(root)" : "::view-transition-new(root)",
          fill: "forwards",
        },
      );
    });

    transition.finished.then(() => {
      clearThemeTransition();
    });
  };

  return (
    <div ref={ref} className="flex items-center gap-2">
      {mainContext.theme && Object.keys(mainContext.theme).length > 0
        ? Object.keys(mainContext.theme).map((themeKey, idx) => (
            <button
              key={idx}
              onClick={() => handleThemeChange(themeKey)}
              style={{ backgroundColor: selectedTheme === themeKey ? "#06A0F1" : "transparent" }}
              className="border border-gray-400 hover:border-[#06A0F1] rounded px-3 py-1 transition-colors cursor-pointer"
            >
              {themeKey}
            </button>
          ))
        : null}
    </div>
  );
}
