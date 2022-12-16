import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <ul className={css.itemList}>
      <li className={css.item}>
        <NavLink className={css.link} to={'/login'}>
          Log in
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink className={css.link} to={'/register'}>
          Sign up{' '}
        </NavLink>
      </li>
    </ul>
  );
};
