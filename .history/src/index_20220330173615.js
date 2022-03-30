import * as ReactDOM from "react-dom";
import App from "App";

const container = document.getElementById("app");

// Initial render.
ReactDOM.render(<App tab="home" />, container);

// During an update, React would access
// the root of the DOM element.
ReactDOM.render(<App tab="profile" />, container);
