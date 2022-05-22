import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'
import auth from '../firebase/firebase.init';

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start ">
          <div className="absolute dropdown right-0">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact right-2/4 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {
            user ?  <button onClick={()=>signOut(auth)} className="btn-link btn text-rose-500 font-bold">Sign out</button> : <span><li><Link className="btn-link btn font-bold" to="/login">Login</Link></li>
            <li><Link className="btn-link btn font-bold" to="/register">register</Link></li></span>
          }
            </ul>
          </div>
          <div className="flex items-center">
          <Link to="/" className=" normal-case text-xl"><img className="w-36" src={logo} alt="" /></Link>
          <div className="divider divider-horizontal"></div>
          <Link to="/order" className="text-primary font-semibold">order Food</Link>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          
          {
            user ?  <button onClick={()=>signOut(auth)} className="btn bg-rose-500 hover:bg-rose-700 rounded-xl text-white font-bold">Sign out</button> : <ul className="menu menu-horizontal "><li><Link className="btn bg-rose-500 hover:bg-rose-700 rounded-xl text-white font-bold" to="/login">Login</Link></li>
            <li><Link className="btn btn-outline rounded-xl hover:bg-rose-500 hover:text-white text-rose-500 ml-2 font-bold" to="/register">register</Link></li></ul>
          }
           
           
        </div>
      </div>
    </div>
  );
};

export default Navbar;