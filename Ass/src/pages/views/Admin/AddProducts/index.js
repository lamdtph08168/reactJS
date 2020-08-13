import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { Editor } from '@tinymce/tinymce-react';
import firebase from "../../../../firebase";

// ES Modules
import parse from 'html-react-parser';
 
// CommonJS

const AddProducts = ({onAdd, categories}) => {
    const history = useHistory();
    const { register, handleSubmit , errors } = useForm();
    // const onSubmit = data => console.log(data);
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
                    desc,
                };
                console.log(newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAdd(newData);
                history.push("/admin/products");
            });
        });
    };
    const [desc, setDesc]= useState("");
    const handleEditorChange = (content, editor) => {
        
        setDesc(content);
    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Add Product Form</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="form-group">
                            <label htmlFor="">Tên sản phẩm</label>
                            <input type="text"
                            ref={register({
                                required: true,
                                minLength:2,
                                maxLength:100
                                
                              })} name="name" className="form-control" /> 
                              {errors.name && errors.name.type ==='required'&&<span className='text-danger'>Bạn ko để trống </span>}
                              {errors.name && errors.name.type ==='minLength'&&<span  className='text-danger'>Không được để khoảng trăng </span>}
                              {errors.name && errors.name.type ==='maxLength'&&<span  className='text-danger'>Tối đa 100 kí tự</span>}
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
                      
                        <div className="form-group">
                            <label htmlFor="">Giá</label>
                            
                            <input type="text"
                            ref={register({
                                required: true,
                                
                                
                              })}  name="price" className="form-control"  /> 
                              {errors.price && errors.price.type ==='required'&&<span  className='text-danger'>Bạn ko để trống </span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Giá khuyến mãi</label>
                            
                            <input type="text"
                            ref={register({
                                required: true,
                                
                                
                              })}  name="sale" className="form-control"  /> 
                              {errors.sale && errors.sale.type ==='required'&&<span  className='text-danger'>Bạn ko để trống </span>}
                        </div>
                        <label htmlFor="" > Danh mục</label>
                        <select className="form-control" name="id_cate" ref={register} >
                      
                        <option value={0}>Choose Category</option>
                        {categories.map(({ id, name }) => (
                        <option value={id}>{name}</option>
                        ))}
                        </select>
                        <div className="form-group">
                            <label htmlFor="">Detail</label>
                            <textarea rows="3" cols="" ref={register({
                                required: true,
                                
                                
                              })}  name="detail" className="form-control"  />
                           
                              {errors.detail && errors.detail.type ==='required'&&<span  className='text-danger'>Bạn ko để trống </span>}
                        </div>
                    <br/>
                    <Editor
                    initialValue="<p>This is the initial content of the editor</p>"
                    init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help'
         }}
         onEditorChange={handleEditorChange}
       /> 
       <br/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
   
   )
}

AddProducts.propTypes = {

}

export default AddProducts
