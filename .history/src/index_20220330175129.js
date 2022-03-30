import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);
