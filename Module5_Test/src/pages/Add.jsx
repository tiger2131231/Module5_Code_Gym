import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { createSong } from '../Service/MusicService';
import { toast } from 'react-toastify';

const Add = () => {
    const navigate = useNavigate();

    const initialValues = {
        name: '',
        artist: '',
        composer: '',
        broadcast_time: '',
        number_of_likes: 0,
        status: 'Lưu trữ'
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Tên bài hát không được để trống'),
        artist: Yup.string()
            .max(30, 'Tên ca sĩ tối đa là 30 ký tự')
            .required('Tên ca sĩ không được để trống'),
        broadcast_time: Yup.string()
            .matches(/^([0-5][0-9]):([0-5][0-9])$/, 'Định dạng hh:mm (ví dụ 03:45)')
            .required('Thời gian phát không được để trống'),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await createSong(values);
            toast.success('Thêm bài hát mới thành công!');
            navigate('/songs');
        } catch (error) {
            console.error('Lỗi khi thêm bài hát:', error);
            toast.error('Có lỗi xảy ra khi thêm bài hát');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="container">
            <h1 className="main-title text-center">Thêm mới bài hát</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="mt-4 mx-auto" style={{ maxWidth: '600px' }}>
                        <div className="mb-3">
                            <label className="form-label">Tên bài hát</label>
                            <Field type="text" name="name" className="form-control" />
                            <ErrorMessage name="name" component="div" className="text-danger small" />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Ca sĩ</label>
                            <Field type="text" name="artist" className="form-control" />
                            <ErrorMessage name="artist" component="div" className="text-danger small" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Thời gian phát (phút:giây)</label>
                            <Field type="text" name="broadcast_time" className="form-control" placeholder="Ví dụ: 03:45" />
                            <ErrorMessage name="broadcast_time" component="div" className="text-danger small" />
                        </div>

                        
                        <div className="text-center mt-4">
                            <button 
                                type="button" 
                                className="btn btn-secondary me-2 px-4" 
                                onClick={() => navigate('/songs')}
                            >
                                Hủy
                            </button>
                            <button 
                                type="submit" 
                                className="btn btn-primary px-5" 
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Đang lưu...' : 'Lưu bài hát'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Add;
