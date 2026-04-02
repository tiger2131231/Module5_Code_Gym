import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {getAll, remove} from "../Service/PlayerService";
import { toast } from "react-toastify";
import ConfirmModal from "./ConfirmModal";

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const [selectedId, setSelectedId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAll();
                setPlayers(data);
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();
    }, [isLoading]); // 🔥 QUAN TRỌNG

    // mở modal
    const handleDelete = (id) => {
        setSelectedId(id);
        setShowModal(true);
    };

    // confirm xoá
    const confirmDelete = async () => {
        const success = await remove(selectedId);

        if (success) {
            toast.success("Xóa thành công");

            // 🔥 trigger reload giống Student
            setIsLoading(prev => !prev);

        } else {
            toast.error("Xóa thất bại");
        }

        setShowModal(false);
    };

    // search
    const filtered = players.filter(p =>
        p.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.code?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Danh sách cầu thủ</h2>

            <Link to="/player/add">Thêm mới</Link>

            <input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <table>
                <tbody>
                {filtered.map(p => (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.code}</td>
                        <td>{p.name}</td>
                        <td>{p.dob}</td>
                        <td>{p.value}</td>
                        <td>{p.position?.name}</td>
                        <td>
                            <Link to={`/edit/${p.id}`}>Edit</Link>
                            <button onClick={() => handleDelete(p.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <ConfirmModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={confirmDelete}
            />
        </div>
    );
};

export default PlayerList;