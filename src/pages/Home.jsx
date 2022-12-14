import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <main>
        <p>Hello World</p>
        <Outlet />
      </main>
    </>
  );
};
export default Home;
