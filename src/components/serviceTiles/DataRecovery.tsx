import useScrollhooks from "@/hooks/useScrollhooks";
import { motion } from "framer-motion";

const DataRecovery = () => {
    const {style , componentRef} = useScrollhooks()

    return (
        <motion.div 
          style={style} 
          ref={componentRef}
        className="grid lg:col-span-7 col-span-6 rounded-xl bg-teal-500 h-[415px]"></motion.div>
    );
};

export default DataRecovery;