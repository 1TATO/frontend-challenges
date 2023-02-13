import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Ticket } from './pages/Ticket';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ticket" element={<Ticket />} />
    </Routes>
  );
}
