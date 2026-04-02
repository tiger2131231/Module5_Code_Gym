import axios from "axios";

const API = "http://localhost:5174/player";

// GET ALL
export const getAll = async () => {
    try {
        const res = await axios.get(API);
        return res.data;
    } catch (e) {
        console.log(e);
    }
    return [];
};

// GET BY ID
export const getById = async (id) => {
    try {
        const res = await axios.get(`${API}/${id}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
    return null;
};

// CREATE
export const create = async (data) => {
    try {
        const res = await axios.post(API, data);

        // JSON Server trả 201
        if (res.status === 201) {
            return true;
        }
    } catch (e) {
        console.log(e);
    }
    return false;
};

// UPDATE
export const update = async (id, data) => {
    try {
        const res = await axios.put(`${API}/${id}`, data);

        // JSON Server trả 200
        if (res.status === 200) {
            return true;
        }
    } catch (e) {
        console.log(e);
    }
    return false;
};

// DELETE
export const remove = async (id) => {
    try {
        const res = await axios.delete(`${API}/${id}`);

        // JSON Server thường trả 200
        if (res.status === 200 || res.status === 204) {
            return true;
        }
    } catch (e) {
        console.log(e);
    }
    return false;
};