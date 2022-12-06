import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import LogIn from './routes/LogIn';
import SignUp from './routes/SignUp';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<LogIn />} />
    </Routes>
  );
}
