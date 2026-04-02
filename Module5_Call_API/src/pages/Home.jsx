import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px 0' }}>
        <h1>
            Chào mừng bạn đến với Hệ thống Quản <br />
            lý Cầu thủ
        </h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px' }}>
        Quản lý thông tin cầu thủ bóng đá chuyên nghiệp một cách hiệu quả và dễ dàng.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Link to="/player" style={{ padding: '12px 24px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
          Xem danh sách cầu thủ
        </Link>
        <Link to="/player/add" style={{ padding: '12px 24px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
          Thêm cầu thủ mới
        </Link>
      </div>
    </div>
  );
};

export default Home;
