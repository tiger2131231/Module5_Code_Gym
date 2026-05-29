import axios from "axios";

const BE_URL = "http://localhost:8080"

export async function checkLogin({username,password}){
    // call API của backend
    try{
        const res = await axios.get(`${BE_URL}/accounts`)
        console.log(username,password)
        return res.data.find(account => (username == account.username && account.password == password));
    }catch (e){
        console.log(e)
    }
    return null;

}