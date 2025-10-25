import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <div className="flex h-screen max-h-screen w-screen">
      <App />
    </div>
  </HashRouter>,
);
