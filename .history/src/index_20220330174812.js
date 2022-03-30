import * as ReactDOMClient from "react-dom/client";

function App({ callback }) {
  return (
    <div ref={callback}>
      <h1>Hello World</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);

root.render(<App />);
