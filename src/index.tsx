import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId =
  "531995534937-qat8cfosnd4fmq83ac4ncvsl0c76pkec.apps.googleusercontent.com";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
