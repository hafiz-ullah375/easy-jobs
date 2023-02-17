import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <div className='bg-cyan-600'>
            <div className="navbar  lg:w-11/12  mx-auto py-5">
                <div className="navbar-start w-full">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li className='mx-2'><Link to="/allServices">Service</Link></li>
                            <li><Link to="/addServices">Add Services</Link></li>
                            <li ><Link to="myReview">My Review</Link></li>
                            <li ><Link to="blogs">Blogs</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl">Easy Jobs

                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>

                        <li ><Link to="about">About</Link></li>
                        <li ><Link to="contactUs">Contact Us</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <Link className='font-bold text-xl mr-2' to='/login' onClick={logout}> LogOut </Link>

                            :
                            <Link className='font-bold text-xl mr-2' to='/login' > Login </Link>


                    }
                </div>
            </div>
        </div>
    );
};

export default Header;