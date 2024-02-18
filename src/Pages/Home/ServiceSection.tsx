import Container from "@/components/Container";

const ServiceSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-between items-center">
        <h1>Services that Provided</h1>
        <p className="max-w-[80ch] mt-4 mb-16">
          Our all technisian are good and skillfulled.So, you are free from
          afraid to service your products.Our all ,member are also respectfull
          and helpfull
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="grid col-span-12  rounded-xl bg-red-700 h-[415px]"></div>
        <div className="grid lg:col-span-5 col-span-6  rounded-xl bg-red-700 h-[415px]"></div>
        <div className="grid lg:col-span-7 col-span-6 rounded-xl bg-red-700 h-[415px]"></div>
        <div className="grid col-span-12  rounded-xl bg-red-700 h-[415px]"></div>
        <div className="grid lg:col-span-4 md:col-span-6 col-span-12  rounded-xl bg-red-700 h-[415px]"></div>
        <div className="grid lg:col-span-4 md:col-span-6 col-span-12 bg-red-700 h-[415px]"></div>
        <div className="grid lg:col-span-4 md:col-span-12 col-span-12 bg-red-700 h-[415px]"></div>
      </div>
    </Container>
  );
};

export default ServiceSection;
