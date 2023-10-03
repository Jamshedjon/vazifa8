import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="py-6 bg-gray-300 shadow-md ">
            <div className="container flex justify-between">
                <h1 className="text-3xl">Articles</h1>
                <div className=" flex gap-5">
                    <NavLink className="  btn btn-outline " to="/">
                        Home
                    </NavLink>
                    <NavLink className="  btn btn-outline " to="/about">
                        About
                    </NavLink>
                    <NavLink className="  btn btn-outline " to="/contact">
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
