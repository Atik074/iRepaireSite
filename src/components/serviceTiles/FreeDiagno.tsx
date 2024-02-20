import useScrollhooks from "@/hooks/useScrollhooks";
import { motion } from "framer-motion";

const FreeDiagno = () => {
  const { style, componentRef } = useScrollhooks();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="grid  bg-yellow-300 rounded-lg lg:col-span-4 md:col-span-6 col-span-12 bg- h-[415px]"
    ></motion.div>
  );
};

export default FreeDiagno;
