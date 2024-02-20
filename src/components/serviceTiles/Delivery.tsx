import useScrollhooks from "@/hooks/useScrollhooks";
import { motion } from "framer-motion";

const Delivery = () => {
    const { style, componentRef } = useScrollhooks();

    return (
        <motion.div 
        style={style}
        ref={componentRef}
        className="grid lg:col-span-4 md:col-span-6 col-span-12  rounded-xl bg-red-700 h-[415px]"></motion.div>
    );
};

export default Delivery;