import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {findById} from "../service/PlayerService.js";

const Detail =()=>{
    const [player,setPlayer] = useState({});
    const {id} = useParams();
    useEffect(() => {
        const fetData = async ()=>{
            setPlayer(await findById(id))
        }
        fetData();

    }, []);
    return(
        <>
            <h2>Thông tin chi tiết</h2>
            <p>ID:{player?.id} </p>
            <p>Name:{player?.name} </p>
            <p>Class name: {player?.position()?.name} </p>
        </>
    )
}
export default Detail ;