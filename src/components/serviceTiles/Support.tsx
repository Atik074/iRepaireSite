import useScrollhooks from "@/hooks/useScrollhooks";
import { motion } from "framer-motion";

const Support = () => {
    const { style, componentRef } = useScrollhooks();

    return (
        <motion.div 
        style={style}
        ref={componentRef}
         className="grid lg:col-span-4 md:col-span-12 col-span-12 bg-red-700 h-[415px]"></motion.div>
    );
};

export default Support;