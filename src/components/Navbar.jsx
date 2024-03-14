import { Link } from 'react-router-dom';
import { useAuth } from "../contexts/auth-provider";

const Navbar = () => {
  const { isSignedIn, user, logout } = useAuth();
  return (
    <nav className="flex justify-between items-center w-full mb-8 pt-3">

      <div className="text-xl" id="logo">
        <Link to="/" className='flex justify-center items-center'>
          <img src="/assets/images/stethoscope.png" alt="stethoscope" className='w-10 h-10' />
          EasyDoc
        </Link>
      </div>

      <div className="hidden sm:flex gap-6">
        <ul className="flex gap-6">
          {isSignedIn ? <li>
            <Link to="/add-blog">Add Blog</Link>
          </li> : null}
        <li className="flex items-center hover:scale-110 duration-300">
          <Link to="/diagnosis"> Diagnosis </Link>
        </li>

        <li className="flex items-center hover:scale-110 duration-300">
          <Link to="/doctor"> Doctors </Link>
        </li>

        <li className="flex items-center hover:scale-110 duration-300">
          <Link to="/blog"> Blogs </Link>
        </li>

        <li>
          {isSignedIn ? (
            <span>
              <h1>Hi, {user?.name}</h1>
              <button onClick={logout}>Logout</button>
            </span>
        ) : (<Link to="/login">
          <div className="flex gap-1 border-[1.5px] border-gray-300  px-4 py-[2px] rounded-full hover:scale-110 hover:shadow-sm duration-300">
            <span className="">Login / Sign up</span>
          </div>
        </Link>)}
      </li>
    </ul>
      </div >

    </nav >
  )
}

export default Navbar;
