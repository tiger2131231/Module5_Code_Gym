import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="text-center py-5">
        <h1 className="display-4 mb-4">Chào mừng đến với Music Manager</h1>
        <p className="lead mb-5">Hệ thống quản lý bài hát chuyên nghiệp.</p>
        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <Link to="/songs" className="btn btn-primary btn-lg px-4 gap-3">Xem danh sách bài hát</Link>
            <Link to="/add" className="btn btn-outline-secondary btn-lg px-4">Thêm bài hát mới</Link>
        </div>
    </div>
);

export default Home;