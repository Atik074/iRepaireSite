import Container from "@/components/Container";
import BatteryReplacemnet from "@/components/serviceTiles/BatterReplacemnet";
import ChipReplacement from "@/components/serviceTiles/ChipReplacement";
import DataRecovery from "@/components/serviceTiles/DataRecovery";
import Delivery from "@/components/serviceTiles/Delivery";
import FreeDiagno from "@/components/serviceTiles/FreeDiagno";
import StorageReplacement from "@/components/serviceTiles/StorageReplacement";
import Support from "@/components/serviceTiles/Support";


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
        <BatteryReplacemnet />
        <ChipReplacement/>
        <DataRecovery/>
        <StorageReplacement/>
        <Delivery/>
        <FreeDiagno/>
        <Support/>

     
       
      
    
      </div>
    </Container>
  );
};

export default ServiceSection;
