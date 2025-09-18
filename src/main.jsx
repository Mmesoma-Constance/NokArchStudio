import ReactDOM from "react-dom/client";
import "./index.css";
import "aos/dist/aos.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
