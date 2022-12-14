import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Layout from 'components/Layout/Layout';
import Contacs from 'pages/Contacs';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authOperation';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contacs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
