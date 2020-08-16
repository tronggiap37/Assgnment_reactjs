import React from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const AddProduct = ({ products, onAdd }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();

    const onHandleSubmit = (data) => {
        //         let file = data.image[0];
        //         let storageRef = firebase.storage().ref(`images/${file.name}`); // tạo folder chứa ảnh trên firesbase
        //         let uploadTask = storageRef.put(file);// đẩy ảnh lên đường dẫn trên
        //         uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED); // thực hiện

        //       // lấy ảnh từ firestore
        //         firebase.storage().ref().child(`images/${file.name}`).getDownloadURL().then((url) => { 
        //      // Tạo object mới chứa toàn bộ thông tin từ input
        //             const newData = {
        //                 id: Math.random().toString(36).substr(2, 9),
        //                 ...data,
        //                 desc,
        //                 image: url
        //             }
        // // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        //             onAdd(newData)
        //         })
    }


    return (
        <div>
            {/* <form action="" className="w-50" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="productName"
                        ref={register({ required: true, minLength: 1 })}
                        aria-describedby="nameHelp"
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>* This field is required</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Min Length 10</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Ảnh sản phẩm</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile02" name="image"
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Chọn ảnh</label>
                        </div>
                    </div>
                    <small id="imageHelp" className="form-text text-danger">{errors.image && <span> * This field is required</span>}</small>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Mô tả</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Số lượng</label>
                    <input type="text" className="form-control" id="inputAddress"  />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Đơn giá</label>
                    <input type="text" className="form-control" id="inputAddress2" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Trạng thái</label>
                    <input type="text" className="form-control" id="inputAddress2" />
                </div>
                <div className="form-group">
                </div>
                <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
            </form>
            <br></br> */}
            <form action="" className="w-50" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="productName"
                        ref={register({ required: true, minLength: 1 })}
                        aria-describedby="nameHelp"
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>* Không để trống thông tin</span>}
                        {errors.name && errors.name.type === "minLength" && <span>* Nhập ít nhất 5 kí tự</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Ảnh sản phẩm</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile02" name="image"
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                        </div>
                    </div>
                    <small id="imageHelp" className="form-text text-danger">{errors.image && <span> * This field is required</span>}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Giá sản phẩm</label>
                    <input
                        type="text"
                        name="price"
                        className="form-control"
                        id="productPrice"
                        ref={register({ required: true, maxLength:10 })}
                        aria-describedby="priceHelp"
                    />
                    <small id="priceHelp" className="form-text text-danger">{errors.price && <span>* This field is required</span>}</small>
                </div>
                <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
            </form>
        </div>
    )
}

AddProduct.propTypes = {
    products: PropTypes.array,
    onAdd: PropTypes.func
}

export default AddProduct
