import { ChatList } from './components/ChatList';
import { ChatMessages } from './components/ChatMessages';
import { Header } from './components/Header';
import { Input } from './components/Input';
import './styles/global.css';

export function App() {
  return (
    <div className="w-screen min-h-screen grid lg:grid-cols-chat-500 sm:grid-cols-chat-300 grid-cols-chat-100 gap-2 md:gap-6  justify-center bg-background py-8 px-4">
      <ChatList />

      <div className="flex flex-col">
        <Header />

        <ChatMessages />
        <Input />
      </div>
    </div>
  );
}
