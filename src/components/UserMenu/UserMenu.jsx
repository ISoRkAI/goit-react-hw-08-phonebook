import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import authSelectors from 'redux/auth/authSelectors';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={css.userlist}>
      <p className={css.text}>Welcome, {name}</p>
      <button className={css.button} onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};
