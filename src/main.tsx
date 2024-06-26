import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme accentColor="teal" grayColor="olive" radius="small">
      <App />
      {/* <ThemePanel /> */}
    </Theme>
  </React.StrictMode>
);
