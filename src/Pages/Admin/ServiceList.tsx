import Container from "@/components/Container";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetServices } from "./services/services.hook";


const ServiceList = () => {
const {data:services , isLoading , isError} = useGetServices()
// const {data:services , isLoading , isError} = useQuery({
//     queryKey:["service"] ,
//     queryFn: getservices ,
//     select: (data)=>{
//       const services = data?.data?.data?.map(item =>({
//         id:item._id ,
//        name:item.name,
//        description:item.description ,
//         price:item.price
//         }))

//         return services;
//     }
// })




if(isLoading){
    return <h3>Loading...</h3>
}

 if(isError){
    return <p>something Went wrong</p>
 }

    return (
      <Container className="border p-0 mt-20  rounded-xl">
          <Table>
        <TableCaption>A list of your recent {services.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell className="text-right">{service.price}</TableCell>

            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            {/* <TableCell className="text-right">$2,500.00</TableCell> */}
          </TableRow>
        </TableFooter>
      </Table>
      </Container>

    );
};

export default ServiceList;