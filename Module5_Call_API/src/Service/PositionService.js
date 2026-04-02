import axios from "axios";

const BE_URL = "http://localhost:5174"

export async function getAll(){
    // call API của backend
    try{
        const res = await axios.get(`${BE_URL}/position`)
        return res.data;
    }catch (e){
        console.log(e)
    }
    return [];

}