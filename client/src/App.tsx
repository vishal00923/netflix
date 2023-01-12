import { Routes, Route } from 'react-router-dom';

import Home from '@/routes/Home/index';
import Login from '@/routes/Login/index';
import Signup from '@/routes/Signup/index';

export default function App() {
  const user = true;

  return (
    <Routes>
      {user ? (
        <Route path='/' element={<Home />} />
      ) : (
        <>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </>
      )}
    </Routes>
  );
}
