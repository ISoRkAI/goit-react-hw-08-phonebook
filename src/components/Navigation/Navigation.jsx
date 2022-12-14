import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <NavLink to={''}>Home</NavLink>
      <NavLink to={'contacts'}>Contacts</NavLink>
    </>
  );
};