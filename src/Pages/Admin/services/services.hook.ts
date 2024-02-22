import { getservices } from "@/api/admin/service/services.api";
import { useQuery } from "react-query";

export const useGetServices =()=>{
 const servicesInfoData = useQuery({
        queryKey:["service"] ,
        queryFn: getservices ,
        select: (data)=>{
          const services = data?.data?.data?.map(item =>({
            id:item._id ,
           name:item.name,
           description:item.description ,
            price:item.price
            }))
    
            return services;
        }
    })

  return servicesInfoData ;
}