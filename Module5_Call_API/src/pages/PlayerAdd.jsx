import { useState } from "react";
import { create } from "../Service/PlayerService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PlayerAdd = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await create(form);
    toast.success("Thêm thành công");
    navigate("/");
  };

  return (
      <form onSubmit={handleSubmit}>
        <input onChange={e => setForm({...form, name: e.target.value})} placeholder="Name"/>
        <input onChange={e => setForm({...form, code: e.target.value})} placeholder="Code"/>
        <button type="submit">Save</button>
      </form>
  );
};

export default PlayerAdd;