import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLinks = () =>{
    const { pathname } = useLocation("");
    
    if(pathname === "/"){
        return (
            <React.Fragment>
                <Link to="/" className="whitespace-nowrap text-base font-medium text-white-500 hover:text-white-900">Login</Link>
                <Link to="/register" className="ml-8 whitespace-nowrap text-base font-medium text-white-500 hover:text-white-900">Register</Link>
            </React.Fragment>
        )
    }
    else if(pathname === "/register"){
        return (
            <React.Fragment>
                <Link to="/" className="whitespace-nowrap text-base font-medium text-white-500 hover:text-white-900">Login</Link>
                <Link to="/register" className="ml-8 whitespace-nowrap text-base font-medium text-white-500 hover:text-white-900">Register</Link>
            </React.Fragment>
        )
    }
    else{
        return(
            <React.Fragment>
                <Link to="/" className="ml-8 whitespace-nowrap text-base font-medium text-white-500 hover:text-white-900">Logout</Link>
                <Link to="/bucket" className="ml-8 whitespace-nowrap text-base font-medium text-white-500 hover:text-white-900">My Bucket</Link>
            </React.Fragment>
        )
    }
}


function Navbar() {
    return (
        <div>
            <div className="relative" style={{ backgroundColor: '#008289', color: '#ffffff' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="!#" className="font-style:italic whitespace-nowrap text-base font-medium  text-white-500 hover:text-white-900">
                                Eventful Moments.
                                
                            </a>
                        </div>
                    
                        <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                            <NavLinks />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
