import { ChatMessages } from './components/ChatMessages';
import { Header } from './components/Header';
import './styles/global.css';

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center bg-background pt-8 px-2">
      <div className="w-full max-w-7xl">
        <Header />

        <ChatMessages />
      </div>
    </div>
  );
}
