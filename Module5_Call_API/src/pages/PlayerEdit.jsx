import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import { update, findById } from "../Service/PlayerService.js";
import { getAll } from "../Service/PositionService.js";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

const PlayerEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [player, setPlayer] = useState(null);
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const playerInfo = await findById(id);
            if (playerInfo) {

                setPlayer({
                    ...playerInfo,
                    position: JSON.stringify(playerInfo.position)
                });
            } else {
                toast.error("Không tìm thấy cầu thủ");
                navigate("/player");
            }

            const posData = await getAll();
            setPositions(posData);
        };
        fetchData();
    }, [id, navigate]);

    const handleUpdate = async (values) => {
        const dataToUpdate = {
            ...values,
            position: typeof values.position === "string" ? JSON.parse(values.position) : values.position
        };

        const isSuccess = await update(id, dataToUpdate);
        if (isSuccess) {
            toast.success("Cập nhật thành công");
            navigate("/player");
        } else {
            toast.error("Cập nhật thất bại");
        }
    };

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

    if (!player) return <div>Đang tải...</div>;

    return (
        <div className="container mt-4">
            <h2>Chỉnh sửa cầu thủ</h2>
            <Formik initialValues={player} onSubmit={handleUpdate} validationSchema={validation} enableReinitialize={true}>
                <Form>
                    {/* NAME */}
                    <div className="mb-3">
                        <label className="form-label">Tên</label>
                        <Field type="text" name="name" className="form-control" />
                        <ErrorMessage name="name" component="small" className="text-danger" />
                    </div>

                    {/* CODE */}
                    <div className="mb-3">
                        <label className="form-label">Mã cầu thủ</label>
                        <Field type="text" name="code" className="form-control" />
                        <ErrorMessage name="code" component="small" className="text-danger" />
                    </div>

                    {/* DOB */}
                    <div className="mb-3">
                        <label className="form-label">Ngày sinh</label>
                        <Field type="date" name="dob" className="form-control" />
                        <ErrorMessage name="dob" component="small" className="text-danger" />
                    </div>

                    {/* VALUE */}
                    <div className="mb-3">
                        <label className="form-label">Giá trị ($)</label>
                        <Field type="number" name="value" className="form-control" />
                        <ErrorMessage name="value" component="small" className="text-danger" />
                    </div>

                    {/* POSITION */}
                    <div className="mb-3">
                        <label className="form-label">Vị trí</label>
                        <Field as="select" name="position" className="form-control">
                            <option value="">--- Chọn vị trí ---</option>
                            {positions.map(po => (
                                <option key={po.id} value={JSON.stringify(po)}>
                                    {po.name}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage name="position" component="small" className="text-danger" />
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        <Button type="submit" variant="primary">Lưu thay đổi</Button>
                        <Button variant="secondary" className="ms-2" onClick={() => navigate("/player")}>Hủy</Button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default PlayerEdit;