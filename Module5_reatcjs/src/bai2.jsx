function bai2() {
    const customers = [
        { id: 1, code: "KH001", name: "Nguyễn Văn A", address: "Hà Nội", type: "VIP" },
        { id: 2, code: "KH002", name: "Trần Thị B", address: "Đà Nẵng", type: "Thường" },
        { id: 3, code: "KH003", name: "Lê Văn C", address: "Hải Phòng", type: "VIP" },
        { id: 4, code: "KH004", name: "Phạm Thị D", address: "Cần Thơ", type: "Thường" }
    ];

    return (
        <div>
            <h2>Danh sách khách hàng</h2>

            <table border="1" cellPadding="10">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Mã</th>
                    <th>Tên</th>
                    <th>Địa chỉ</th>
                    <th>Loại khách hàng</th>
                </tr>
                </thead>

                <tbody>
                {customers.map((customer) => (
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.code}</td>
                        <td>{customer.name}</td>
                        <td>{customer.address}</td>
                        <td>{customer.type}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
export default bai2