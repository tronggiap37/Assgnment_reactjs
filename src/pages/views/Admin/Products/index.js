import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const ProductsManager = ({ products, onRemove }) => {

    const removeHandle = (id) => {
        alert("Xóa thành công!")
        onRemove(id)
        window.location.reload();
        // onload();
    }
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h3 mb-2 text-gray-800">Quản lý sản phẩm</h1>
                <Link to="/admin/product/add" className="btn btn-primary">Thêm sản phẩm</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr style={{ backgroundColor: 'Beige', fontFamily: 'monospace', fontSize: '17px' }}>
                                    <th scope="col">ID</th>
                                    <th scope="col">Tên sản phẩm</th>
                                    <th scope="col">Ảnh sản phẩm</th>
                                    <th scope="col">Mô tả</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Đơn Giá(VNĐ)</th>
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col" width="175">Sự kiện</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, name,mota, image, number, price }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="200" /></td>
                                        <td width="150">{mota}</td>
                                        <td>{number}</td>
                                        <td>{price}</td>
                                        <td></td>
                                        <td>
                                            <Link style={{ margin: '10px' }} className="btn btn-outline-primary" to={`/admin/product/${id}`}>Sửa</Link>
                                            <button className="btn btn-outline-danger" onClick={() => removeHandle(id)}>Xóa</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {
    products: PropTypes.array,
    onRemove: PropTypes.func
}

export default ProductsManager
