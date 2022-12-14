import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperation from '../redux/auth/authOperation';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperation.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={formSubmit}>
        <p>Name</p>
        <input
          placeholder="Jacob Mercer"
          type="text"
          name="name"
          required
          onChange={handleCange}
        />
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
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
export default Register;
