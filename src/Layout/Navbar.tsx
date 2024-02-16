import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header className="h-16 bg-fixed w-full bg-white z-[999]
       "
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{delay:1 , duration:1}}
       
       >
      <nav className="w-full h-full max-w-[1220px] mx-auto px-[20px] bg-slate-400  flex justify-between items-center">
        <span className="text-3xl">iRepaire</span>
        <ul className="lg:space-x-6 space-x-3">
          <NavLink to="">Home</NavLink>
          <NavLink to="">Service</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button className="inline-block">Login</Button> 
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
