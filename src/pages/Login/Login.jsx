import { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as authOperation from '../../redux/auth/authOperation';

import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        console.log('Invalid subscription type');
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <main className={css.container}>
      <form onSubmit={formSubmit}>
        <p>Mail</p>
        <input
          autoComplete="on"
          placeholder="JacobMercer@gmail.com"
          type="email"
          name="email"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleCange}
        />
        <p>Password</p>
        <input
          autoComplete="off"
          type="password"
          name="password"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleCange}
        />
        <button type="submit">Log in</button>
      </form>
    </main>
  );
};
export default Login;
