import * as ReactDOMClient from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOMClient.render(<App />, rootElement, () => console.log("renderered"));
