import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <Link to="/">Task Manager</Link>
      <div>
        {token ? (
          <button onClick={() => dispatch(logout())} className="ml-4">Logout</button>
        ) : (
          <Link to="/login" className="ml-4">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
