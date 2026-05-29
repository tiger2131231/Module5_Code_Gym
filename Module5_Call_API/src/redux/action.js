import {checkLogin} from "../service/AccountService.js";
import {toast} from "react-toastify";

export const login = (account)=>{
    return (dispatch1) =>{
        checkLogin(account).then(myAccount =>{
            if (myAccount){
                toast.success("Đăng nhập thành công");
                dispatch1({
                    type: "LOGIN",
                    payload: myAccount
                })
            }else {
                toast.error("Đăng nhập thất bại")
            }
        })
    }
}
export const logout = ()=>{
    return {
        type: "LOGOUT",
        payload: {
            username: "",
            role:""
        }
    }
}