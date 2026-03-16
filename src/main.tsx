import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@store/index";
import "./styles/main.css";
import { router } from "./routes/router";
import MainProvider from "./providers/MainProvider";
import ThemeConfigProvider from "./providers/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <ReduxProvider store={store}>
    <MainProvider>
      <ThemeConfigProvider>
        <RouterProvider router={router} />
      </ThemeConfigProvider>
    </MainProvider>
  </ReduxProvider>,
);
