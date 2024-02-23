import { FormEvent, useState } from "react";
import { useMutation } from "react-query";

const AddService = () => {
  const [serviceName, setServiceName] = useState("")
  const {mutateAsync , isLoading , isError} = useMutation({
     mutationFn:async(data)=>{
        return await fetch("http://localhost:5000/api/v1/services" ,{
            method:"POST" ,
            headers:{
                "content-Type":"application/json"
            } ,
            body:JSON.stringify(data)
        })
     }
  })

 console.log({ isLoading , isError ,})

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();
    const serviceData = {
        name:serviceName ,
        description:"description" ,
        device : ["mackbook pro" , "mackbook air" , "ipad pro"],
        price:500.00 
     }  

     console.log(serviceData)
     await mutateAsync(serviceData)
     console.log("done")

  };




  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-16 px-10">
        <input
          onChange={(e) => setServiceName(e.target.value)}
          className="border border-red-500 rounded p-2"
          type="text"
          name="text"
          id=""
        />
        <input className="p-4" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddService;
