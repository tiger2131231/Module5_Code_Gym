import {useEffect, useState} from "react";
import { toast } from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button} from "react-bootstrap";
import {addNew} from "../Service/PlayerService.js";
import {getAll} from "../Service/PositionService.js";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";

const PlayerAdd = () => {

    const [player] = useState({
        name: "",
        code: "",
        dob: "",
        value: "",
        position: ""
    });
    const [position, setPosition] = useState([]);
    useEffect(() => {
        const fetchData = async()=>{
            const data = await getAll();
            setPosition(data);
        }
        fetchData();
    }, []);
    const navigate = useNavigate();
    const handleAdd = (value)=>{
        value ={
            ...value,
            position: JSON.parse(value.position)
        }
        console.log(value);
        const fetData = async ()=>{
            let isSuccess = await addNew(value);
            if (isSuccess){
                toast.success("Thêm mới thành công");
            }else {
                toast.error("Thêm mới thất bại")
            }
            navigate("/player");
        }
        fetData();
    }
    const validation = Yup.object({
        name: Yup.string()
            .required("Yêu cầu nhập tên")
            .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/, "Tên không đúng định dạng"),

        code: Yup.string()
            .required("Yêu cầu nhập mã cầu thủ"),

        dob: Yup.string()
            .required("Yêu cầu chọn ngày sinh"),

        value: Yup.number()
            .required("Yêu cầu nhập giá trị")
            .min(0, "Giá trị phải >= 0"),

        position: Yup.string()
            .required("Yêu cầu chọn vị trí")
    });

    return (
        <Formik initialValues={player} onSubmit={handleAdd} validationSchema={validation}>
            <Form>

                {/* NAME */}
                <div>
                    <label>Tên</label>
                    <Field type="text" name="name"/>
                    <ErrorMessage name="name" component="small" className="text-danger"/>
                </div>

                {/* CODE */}
                <div>
                    <label>Mã cầu thủ</label>
                    <Field type="text" name="code"/>
                    <ErrorMessage name="code" component="small" className="text-danger"/>
                </div>

                {/* DOB */}
                <div>
                    <label>Ngày sinh</label>
                    <Field type="date" name="dob"/>
                    <ErrorMessage name="dob" component="small" className="text-danger"/>
                </div>

                {/* VALUE */}
                <div>
                    <label>Giá trị ($)</label>
                    <Field type="number" name="value"/>
                    <ErrorMessage name="value" component="small" className="text-danger"/>
                </div>

                {/* POSITION */}
                <div>
                    <label>Vị trí</label>
                    <Field as="select" name="position">
                        <option value="">--- Chọn vị trí ---</option>
                        {position.map(po =>(
                            <option key={po.id} value={JSON.stringify(po)}>
                                {po.name}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage name="position" component="small" className="text-danger"/>
                </div>

                <div style={{marginTop: "10px"}}>
                    <Button type="submit">Lưu</Button>
                </div>

            </Form>
        </Formik>
  );
};

export default PlayerAdd;