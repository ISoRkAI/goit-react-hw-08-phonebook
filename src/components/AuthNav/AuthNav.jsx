import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <NavLink to={'/login'}>Log in</NavLink>
      <NavLink to={'/register'}>Sign up </NavLink>
    </>
  );
};
