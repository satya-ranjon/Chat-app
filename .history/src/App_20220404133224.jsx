import ChatMinContainer from "./components/ChatMinContainer";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <ChatMinContainer />
    </ThemeProvider>
  );
}
