import React, { Component } from 'react';

class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [
                { id: 1, name: 'Nguyễn Văn An', email: 'an@gmail.com' },
                { id: 2, name: 'Trần Thị Bưởi', email: 'buoi@gmail.com' },
                { id: 3, name: 'Lê Văn Chiến', email: 'chien@gmail.com' },
            ],
            showModal: false,
            customerToDelete: null,
        };
    }

    handleShowModal = (customer) => {
        this.setState({ showModal: true, customerToDelete: customer });
    };

    handleCloseModal = () => {
        this.setState({ showModal: false, customerToDelete: null });
    };

    confirmDelete = () => {
        this.setState((prevState) => ({
            customers: prevState.customers.filter(
                (customer) => customer.id !== prevState.customerToDelete.id
            ),
            showModal: false,
            customerToDelete: null,
        }));
    };

    render() {
        const { customers, showModal, customerToDelete } = this.state;

        return (
            <div className="container mt-4">
                <h2>Danh sách khách hàng</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => this.handleShowModal(customer)}
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {showModal && (
                    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Xác nhận xóa</h5>
                                    <button type="button" className="btn-close" onClick={this.handleCloseModal}></button>
                                </div>
                                <div className="modal-body">
                                    <p>Bạn có chắc chắn muốn xóa khách hàng: <strong>{customerToDelete?.name}</strong>?</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={this.handleCloseModal}>
                                        Hủy
                                    </button>
                                    <button type="button" className="btn btn-danger" onClick={this.confirmDelete}>
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default CustomerList;
