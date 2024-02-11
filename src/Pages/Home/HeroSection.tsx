import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import mackbook from "../../assets/images/macbook-exposed.png";

const HeroSection = () => {
  return (
    <Container className="grid place-content-center  grid-cols-2">
      <div>
        <h1 className="text-[93px] font-bold">
          <span className=" text-gray">Don't Worry.</span>
          <br />
          <span>We'll fixed it</span>
        </h1>
        <p>
          wllcome to <span>iReapair</span>, your non-stop palce for all kinds of{" "}
          <span>mackbook repairs</span> and diagonistic
        </p>
        <Button>Book a service</Button>
      </div>
      <div>
        <img src={mackbook} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
