import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="h-16">
            <nav className="w-full h-full max-w-[1220px] mx-auto px-[20px] bg-slate-400  flex justify-between items-center">
                <span className="text-3xl">iRepaire</span>
                <ul className="space-x-6">
                    <NavLink to="">Home</NavLink>
                    <NavLink to="">Service</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <Button>
                        <NavLink to="/login">Login</NavLink>
                    </Button>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;