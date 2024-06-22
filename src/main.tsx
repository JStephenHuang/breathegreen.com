import "./css/index.css";

import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
