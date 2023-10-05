import { Link, NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa6";
import { useEffect, useState } from "react";
function getItemFromLocalStorage() {
    return localStorage.getItem("theme") || "light";
}

function Navbar() {
    const [mode, setMode] = useState(getItemFromLocalStorage);
    useEffect(() => {
        document.documentElement.dataset.theme = mode;
        localStorage.setItem("theme", mode);
    }, [mode]);

    const changeMode = () => {
        setMode((prev) => {
            return prev == "light" ? "dark" : "light";
        });
    };
    return (
        <nav className="py-6 bg-gray-300 shadow-md">
            <div className="container flex justify-between flex-col items-center gap-3 lg:flex-row sm:flex-col">
                <h1 className="text-3xl flex items-center justify-center gap-3">
                    Articles
                    <span className=" cursor-pointer" onClick={changeMode}>
                        {mode == "light" ? <FaMoon /> : <FaSun />}
                    </span>
                </h1>
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
