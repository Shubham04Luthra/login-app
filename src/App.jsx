import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Home, LoginPage } from "./pages";

function App() {
  if (
    localStorage.getItem("authToken") ||
    JSON.parse(localStorage.getItem("userData"))?.username
  ) {
    return <Home />;
  } else {
    return <LoginPage />;
  }
}

export default App;
