import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import firebase from "../../../../firebase";
const AddCate = ({onAddCate}) => {
    const history = useHistory();
    const {register, handleSubmit, errors} = useForm();
    const onHandleSubmit = (data) => {
        //upimage
        // console.log(data.image[0]);
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    image: url,
                };
                console.log(newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAddCate(newData);
                history.push("/admin/category");
            });
        });
    };
    // const [valueInput, setValueInput] = useState({});
    // const onChange = (e) =>{
    //     const {name, value} = e.target
    //     setValueInput({
    //         ...valueInput,
    //         [name]:value
    //     });
    // } 
  
    // const onSubmit = () =>{
    //     onAddCate(valueInput);
    //     history.push('/admin/category');
    // }
   
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Add Categories Form</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="form-group">
                            <label htmlFor="">Tên danh mục </label>
                            <input type="text"
                            ref={register({
                                required: true,
                                minLength:2,
                                maxLength:10
                                
                              })} name="name" className="form-control"/> 
                              {errors.name && errors.name.type ==='required'&&<span className='text-danger'>Bạn ko để trống </span>}
                              {errors.name && errors.name.type ==='minLength'&&<span  className='text-danger'>Không được để khoảng trăng </span>}
                              {errors.name && errors.name.type ==='maxLength'&&<span  className='text-danger'>Tối đa 10 kí tự</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Ảnh</label>
                            <br/>
                            <input type="file"
                            ref={register({
                                required: true,
                                
                                
                              })} 
                             name="image" /> 
                              {errors.image && errors.image.type ==='required'&&<span  className='text-danger'>Bạn ko để trống </span>}
                           
                        </div>
                  
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
   
   )
}

AddCate.propTypes = {

}

export default AddCate
