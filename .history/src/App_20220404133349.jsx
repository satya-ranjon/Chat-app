import ChatMinContainer from "./components/ChatMinContainer";
import { ThemeProvider } from "./context/ThemeContext";
import { ToggleContexts } from "./context/toggleContext";

export default function App() {
  return (
    <ToggleContexts>
      <ChatMinContainer />
    </Tog>
  );
}
