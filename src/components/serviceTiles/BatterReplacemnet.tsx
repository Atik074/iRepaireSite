import useScrollhooks from "@/hooks/useScrollhooks";
import { motion} from "framer-motion";

const BatteryReplacemnet = () => {
    const {componentRef, style} = useScrollhooks()

  return (
    <motion.div
      ref={componentRef}
      style={style}
      className="grid col-span-12  rounded-xl bg-red-700 h-[415px]"
    ></motion.div>
  );
};

export default BatteryReplacemnet;
