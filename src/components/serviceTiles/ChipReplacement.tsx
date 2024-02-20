import useScrollhooks from "@/hooks/useScrollhooks";
import { motion } from "framer-motion";

const ChipReplacement = () => {
  const { style, componentRef } = useScrollhooks();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="grid lg:col-span-5 col-span-6 bg-green-500 rounded-xl  h-[415px]"
    ></motion.div>
  );
};

export default ChipReplacement;
