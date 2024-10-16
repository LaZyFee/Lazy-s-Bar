import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


const Nav = ({ count }) => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate();
    const order = () => { navigate('/orders') }



    const menuItems = [
        { name: "Resturant", path: "/" },
        { name: "BAR", path: "/bar" },
        { name: "Contact", path: "/contact" },
        { name: "About", path: "/about" },
    ].map((item) => (
        <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
                isActive ? "border-b-4 border-b-red-500 p-2 font-extrabold" : ""
            }
        >
            {item.name}
        </NavLink>
    ));


    return (
        <div className="navbar p-5 shadow-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={1}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItems}
                    </ul>
                </div>
                <NavLink className="btn btn-ghost text-xl" to="/">Lazy's BAR</NavLink>
            </div>
            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-4">{menuItems}</ul>
                <ul></ul>
            </div>

            <div className="navbar-end">
                {/* <div className='me-5'>
                    <input type="text" placeholder="Search Your Item" className="input input-bordered w-24 md:w-auto" />
                </div> */}

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">{count}</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg"> {count} Items</span>
                            <span className="text-info">Subtotal: $0</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block" onClick={order}>View cart</button>
                            </div>
                        </div>
                    </div>
                </div >
                <div className='md:me-20'>
                    {
                        user?.uid ?

                            <button onClick={logOut} className='btn btn-error'>Log Out
                            </button>

                            :
                            <button className='btn btn-error'><Link to="/login">Login</Link></button>
                    }
                </div>
            </div>

        </div >
    );
};

export default Nav;