import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAll, updateSong } from '../Service/MusicService';
import { Table, Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

const List = () => {
    const [songs, setSongs] = useState([]);
    const [searchName, setSearchName] = useState("");
    
    // State cho Modal
    const [showModal, setShowModal] = useState(false);
    const [selectedSong, setSelectedSong] = useState(null);

    const fetchData = async () => {
        try {
            const data = await getAll(searchName);
            setSongs(data);
        } catch (error) {
            console.error("Lỗi khi tải dữ liệu bài hát:", error);
            toast.error("Không thể tải danh sách bài hát");
        }
    };

    const handleShowModal = (song) => {
        setSelectedSong(song);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedSong(null);
    };

    const handleConfirmPublic = async () => {
        if (!selectedSong) return;
        
        try {
            await updateSong(selectedSong.id, { ...selectedSong, status: 'Công khai' });
            toast.success(`Đã công khai bài hát "${selectedSong.name}" thành công!`);
            handleCloseModal();
            fetchData();
        } catch (error) {
            console.error("Lỗi khi công khai bài hát:", error);
            toast.error("Không thể công khai bài hát này");
        }
    };

    useEffect(() => {
        const fetchData = async () => {
        const data = await getAll(searchName);
        setSongs(data);
        }
        fetchData();
    }, [searchName]);

    return (
        <div className="container mt-4">
            <h2 className="main-title">Danh sách bài hát</h2>
            
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Link to="/play" className="btn btn-success">
                    <i className="bi bi-music-note  me-2"></i>Phát Nhạc
                </Link>
                <Link to="/add" className="btn btn-success">
                    <i className="bi bi-plus-circle me-2"></i>Thêm bài hát mới
                </Link>
                
                <Form.Group className="mb-0" style={{ width: '300px' }}>
                    <InputGroup>
                        <Form.Control
                            placeholder="Tìm kiếm theo tên bài hát..."
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
            </div>

            <Table hover responsive className="table-fm">
                <thead className="table-dark">
                    <tr>
                        <th>STT</th>
                        <th>Tên bài hát</th>
                        <th>Ca sĩ</th>
                        <th>Thời gian</th>
                        <th>Lượt thích</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.length > 0 ? (
                        songs.map((song, i) => (
                            <tr key={song.id}>
                                <td>{i + 1}</td>
                                <td className="fw-bold">{song.name}</td>
                                <td>{song.artist}</td>
                                <td>{song.broadcast_time}</td>
                                <td>{Number(song.number_of_likes).toLocaleString()}</td>
                                <td>
                                    <span className={`badge ${song.status === 'Công khai' ? 'bg-success' : 'bg-secondary'}`}>
                                        {song.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="btn-group">
                                        {song.status !== 'Công khai' && (
                                            <button 
                                                className="btn btn-outline-success btn-sm"
                                                onClick={() => handleShowModal(song)}
                                            >
                                                <i className="bi bi-megaphone"></i> Công khai
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center text-muted py-4">
                                Không tìm thấy bài hát nào
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận công khai bài hát</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn công khai bài hát <strong>{selectedSong?.name}</strong> của ca sĩ <strong>{selectedSong?.artist}</strong> không?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Hủy
                    </Button>
                    <Button variant="success" onClick={handleConfirmPublic}>
                        Xác nhận công khai
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default List;
