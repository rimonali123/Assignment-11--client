import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme || 'light';
    });


    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const handleToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };



    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("LogOut Successfully")
                toast.error('LogOut successfully')
            })
            .catch(error => {
                console.log(error)
            })
    }
    const NabLinks = <>
        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success font-bold text-xl' : 'text-xl font-bold'} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success font-bold text-xl' : 'text-xl font-bold'} to="/services">All Services</NavLink></li>
        {
            user &&
            <li>
                <details className="w-44">
                    <summary><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success font-bold text-xl' : 'font-bold  text-xl'} to="/addServices">Dashboard</NavLink></summary>
                    <ul className="p-2 z-40">
                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success ' : ''} to="/addServices">Add Service</NavLink></li>

                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success ' : ''} to="/manageService">Manage Service</NavLink></li>

                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success ' : ''} to="/bookedServices">Booked Service</NavLink> </li>
                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success ' : ''} to="/servicesToDo">Service To Do</NavLink></li>
                    </ul>
                </details>
            </li>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">

                            {NabLinks}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img src="https://i.ibb.co/CW0ZRn4/rsz-medicore-logo-removebg-preview.png" className="w-5 lg:w-16" alt="" />
                        <Link to='/' className="btn btn-ghost  lg:text-xl lg:font-bold">ConsultHub</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NabLinks}
                    </ul>
                </div>
                <div className="navbar-end ">



                    {
                        user ? <>
                            <button className="mr-5 tooltip tooltip-left" data-tip={user.displayName}>
                                <NavLink className={({ isActive }) => isActive ? ' font-bold text-3xl rounded-full p-2' : 'text-3xl font-bold rounded-full p-2 '}>
                                    {
                                        user ?
                                            <div className="avatar mt-3">
                                                <div className="w-9  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={user?.photoURL
                                                    } />
                                                </div>
                                            </div>
                                            : <FaRegUserCircle />
                                    }
                                </NavLink>
                            </button>
                            <button onClick={handleLogOut} className="btn btn-outline text-base lg:text-xl font-bold mr-5">LogOut</button>
                        </>

                            :
                            <>

                                <NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success font-bold text-xl mr-5 ' : 'btn btn-outline  text-xl font-bold mr-5'} to="/login">Login</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'lg:flex md:flex hidden btn btn-outline btn-success font-bold text-xl mr-5 ' : 'lg:flex md:flex hidden btn btn-outline  text-xl font-bold mr-5'} to="/register">Register</NavLink>

                            </>
                    }
                    <div className="mr-2">
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input onChange={handleToggle} type="checkbox" className="theme-controller" value="synthwave" />

                            {/* sun icon */}
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;