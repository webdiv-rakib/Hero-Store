import { NavLink } from "react-router";
import herologo from "../../assets/logo.png"
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
    const navLinkStyles = ({ isActive }) =>
        `transition-all duration-200 hover:text-[#6b35e5] hover:underline hover:underline-offset-4 ${isActive ? "text-[#6b35e5] underline-2 underline-offset-4 font-bold" : "text-base-content"
        }`;

    return (
        <div className="navbar bg-base-100 md:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-5 shadow">
                        <NavLink to="/"><span className="md:btn">Home</span></NavLink>
                        <NavLink to="/apps"><span className="md:btn">Apps</span></NavLink>
                        <NavLink to="/installation"><span className="md:btn">Installation</span></NavLink>
                    </ul>
                </div>
                <NavLink to="/" className="flex justify-center items-center gap-2">
                    <img className="w-10" src={herologo} alt="Hero IO" />
                    <a className="text-xl md:text-3xl font-extrabold bg-linear-to-r from-[#6b35e5] to-purple-500 bg-clip-text text-transparent cursor-pointer">
                        Hero Store
                    </a>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-10 font-medium text-lg">
                    <NavLink to="/" className={navLinkStyles}>Home</NavLink>
                    <NavLink to="/apps" className={navLinkStyles}>Apps</NavLink>
                    <NavLink to="/installation" className={navLinkStyles}>Installation</NavLink>
                </ul>
            </div>
            <div className="navbar-end md:flex md:gap-2">
                <a className="btn bg-green-400 text-white bg-linear-to-r from-[#6b35e5] to-purple-500" href="https://github.com/webdiv-rakib" target="_blank"><FaGithub />Contribute</a>
            </div>
        </div>
    );
};

export default NavBar;