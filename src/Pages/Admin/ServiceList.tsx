import { getservices } from "@/api/admin/service/services.api";
import { useQuery } from "react-query";

const ServiceList = () => {

const {data , isLoading} = useQuery({
    queryKey:["service"] ,
    queryFn: getservices
})

console.log(data)

if(isLoading){
    return <h3>Loading...</h3>
}


    return (
        <div>
            {
                data.data.map((item)=>(console.log(item)))
            }
        </div>
    );
};

export default ServiceList;