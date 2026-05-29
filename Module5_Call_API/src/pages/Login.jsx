import {Field, Form, Formik} from "formik";
import {Button} from "react-bootstrap";
import {checkLogin} from "../service/AccountService.js";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {login} from "../redux/action.js";

const Login =()=>{
    const dispatch = useDispatch();
    const handleLogin = (value)=>{
      dispatch(login(value))
    }
    return (
        <>
        <h2>Login</h2>
            <Formik initialValues={{
                username:"",
                password:""
            }} onSubmit={handleLogin}>
                <Form>
                    <div>
                        <label>Username</label>
                        <Field type ="text" name ="username"/>
                    </div>
                    <div>
                        <label>Username</label>
                        <Field type ="text" name ="password"/>
                    </div>
                    <div>
                     <Button type={'submit'}>Login</Button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
export default Login;