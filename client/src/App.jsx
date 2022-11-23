import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import LogIn from './routes/LogIn';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LogIn />} />
    </Routes>
  );
}
