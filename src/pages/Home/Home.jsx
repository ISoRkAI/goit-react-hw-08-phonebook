import { Outlet } from 'react-router-dom';

import css from './Home.module.css';

const Home = () => {
  return (
    <main className={css.container}>
      <p>Hello World</p>
      <Outlet />
    </main>
  );
};
export default Home;
