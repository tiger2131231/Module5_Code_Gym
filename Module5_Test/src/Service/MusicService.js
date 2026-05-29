import axios from "axios";

const API = "http://localhost:5174/songs";

export const getAll = async (name) => {
    let url = API;
    if (name) {
        url += `?name_like=${name}`;
    }
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (e) {
        console.error("API Error:", e);
        return [];
    }
};

export const createSong = async (song) => {
    const res = await axios.post(API, song);
    return res.data;
};

export const updateSong = async (id, song) => {
    const res = await axios.put(`${API}/${id}`, song);
    return res.data;
};
