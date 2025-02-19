import { Link, NavLink, useLocation } from "react-router";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const NavBar = () => {
    const navLinks = <>
        <li className="text-base font-bold"><NavLink to="/">Home</NavLink></li>
        <li className="text-base font-bold"><NavLink to="/statistics">Statistics</NavLink></li>
        <li className="text-base font-bold"><NavLink to="dashboard">Dashboard</NavLink></li>
    </>

    const location = useLocation();

    return (
        <div style={{
            backgroundColor: location.pathname === '/' ? '#9538E2' : 'white',
            color: location.pathname === '/' ? 'white' : 'black',
            width: '95%',
            margin: '30px auto',
            borderTopLeftRadius: location.pathname === '/' ? '20px' : '0',
            borderTopRightRadius: location.pathname === '/' ? '20px' : '0',
            padding: '1rem 2rem'
        }}  
        className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-blue-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link className="font-bold sm:text-lg md:text-xl">Gadget Heaven</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn mr-2 btn-circle sm:btn-sm">
                    <BsCart></BsCart>
                </a>
                <a className="btn btn-circle sm:btn-sm">
                    <FaRegHeart></FaRegHeart>
                </a>
            </div>
        </div>
    );
};

export default NavBar;