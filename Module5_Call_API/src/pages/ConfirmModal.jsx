const ConfirmModal = ({ show, onClose, onConfirm }) => {
    if (!show) return null;

    return (
        <div style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.5)"
        }}>
            <div style={{
                background: "white",
                padding: 20,
                margin: "100px auto",
                width: 300
            }}>
                <h3>Bạn chắc chắn muốn xóa?</h3>
                <button onClick={onConfirm}>Yes</button>
                <button onClick={onClose}>No</button>
            </div>
        </div>
    );
};

export default ConfirmModal;