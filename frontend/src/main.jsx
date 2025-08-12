import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./api/ApiContext.jsx";
import App from "./App.jsx";
import { AuthProvider } from "./auth/AuthContext.jsx";
import "./index.css";

const theme = createTheme();

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <ApiProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApiProvider>
    </AuthProvider>
  </ThemeProvider>
);
