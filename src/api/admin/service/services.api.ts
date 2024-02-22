  import axios from "axios";

export const getservices = async()=>{
    // const res = await fetch("http://localhost:5000/api/v1/service")
    // .then((res) =>res.json());

    // if(!res.success){
    //      throw new Error("something went wrong")
    // }

    // return res;
    return await axios.get("http://localhost:5000/api/v1/services")
    // return await axios.get("http://localhost:5000/api/v1/services")

};
