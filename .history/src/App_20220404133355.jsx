import ChatMinContainer from "./components/ChatMinContainer";
import { ToggleContexts } from "./context/toggleContext";

export default function App() {
  return (
    <ToggleContexts>
      <ChatMinContainer />
    </ToggleContexts>
  );
}
