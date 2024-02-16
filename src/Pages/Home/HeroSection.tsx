import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import mackbook from "../../assets/images/macbook-exposed.png";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 5,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
      delayChildren: 1,
    },
  },
};
const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const laptop ={
   initial :{y:0 , rotate:0 , scale:4} ,
   animate: {
    y:30 ,
    rotate:-30 ,
    scale:1 ,
    transition:{
        duration:1 ,
      y:{duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
      ease: "easeInOut"}

    }
  }
}

const HeroSection = () => {
  return (
    <div className="overflow-hidden"> 
    <Container className=" h-screen mt-52 pt-16   place-content-center grid grid-cols-1 lg:grid-cols-2">
      <motion.div variants={intro} initial="hidden" animate="visible">
        <motion.h1
          variants={introChildren}
          className="text-5xl lg:text-[93px] font-bold text-nowrap"
        >
          <span className="text-gray">Don't Worry.</span>
          <br />
          <span className="text-7xl">We'll fixed it.</span>
        </motion.h1>
        <motion.p
          variants={introChildren}
          className="text-dark-gray mb-5 mt-5 max-w-[50ch] text-lg "
        >
          wllcome to{" "}
          <span className="text-primary-foreground font-semibold">
            iReapair
          </span>
          , your non-stop palce for all kinds of{" "}
          <span className="text-primary-foreground font-semibold">
            mackbook repairs
          </span>{" "}
          and diagonistic
        </motion.p>
        <motion.div variants={introChildren}>
          <Button>Book a service</Button>
        </motion.div>
      </motion.div>
      <motion.div
           variants={laptop}
           initial="initial"
            animate="animate"
       className=" mt-10 w-3/4 lg:w-full mx-auto">
        <img
          className=" h-[80%] ml-8 object-contain"
          src={mackbook}
          alt=""
        />
      </motion.div>
    </Container>
    </div>
  );
};

export default HeroSection;
