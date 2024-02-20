import useScrollhooks from "@/hooks/useScrollhooks";
import { motion } from "framer-motion";

const StorageReplacement = () => {
  const { style, componentRef } = useScrollhooks();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="grid col-span-12  rounded-xl bg-purple-500 h-[415px]"
    ></motion.div>
  );
};

export default StorageReplacement;
