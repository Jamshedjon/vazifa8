import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
    return (
        <>
            <Navbar />
            <main className="container py-9">
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;
