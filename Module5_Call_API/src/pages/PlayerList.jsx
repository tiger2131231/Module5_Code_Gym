import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { getAll} from "../Service/PlayerService";
import Delete from "./PlayerDelete";

const PlayerList = () => {
    const [playerList, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [deletePlayer,setDeletePlayer] = useState({
        id:"",
        name: "",
        code: "",
        dob: "",
        value: "",
        position:""
    })
    const [isShowModal, setIsShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
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
    }, [isLoading]);

    // mở modal
    const handleDelete = (player) => {
        setDeletePlayer(player);
        setIsShowModal(true);
    };

    return (
        <>
            <h2>Danh sách cầu thủ</h2>

            <Link to="/player/add">Thêm mới</Link>

            <input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã Cầu Thủ</th>
                    <th>Tên</th>
                    <th>Ngày sinh</th>
                    <th>Giá trị</th>
                    <th>Vị trị</th>
                    <th>Chi tiết</th>
                    <th>Hành động</th>
                </tr>
                </thead>
                <tbody>
                {
                     playerList && playerList.map((player, i) => (
                    <tr key={player.id}>
                        <td>{i+1}</td>
                        <td>{player.code}</td>
                        <td>{player.name}</td>
                        <td>{player.dob}</td>
                        <td>{player.value}</td>
                        <td>{player.position?.name}</td>
                        <td>
                            <Link to={`/player/detail/${player.id}`}>Detail</Link>
                        </td>
                        <td>
                            <Link to={`/player/edit/${player.id}`}>Edit</Link>
                            <button onClick={() => handleDelete(player)}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Delete isShowModal={isShowModal}
                    deletePlayer={deletePlayer}
                    closeModal ={setIsShowModal}
                    setIsLoading = {setIsLoading}
            />
        </>
    );
};

export default PlayerList;