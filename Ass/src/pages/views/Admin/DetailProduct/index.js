import React, { useState } from 'react';
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import firebase from "../../../../firebase";
const DetailProduct = ({ onAdd , products, onUpdate, categories }) => {
    console.log(products)
    const { register, handleSubmit , errors } = useForm();
    const { id } = useParams();
    const history = useHistory();
  
    const product = id?products.find(product => product.id == id) : {};
    const [valueInput, setValueInput] = useState(product);
  
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        
        setValueInput({
            ...valueInput,
            [name]: value
        })
    }
    const onHandleSubmit = (data) => {
        //upimage
        if(!data.image[0]){
            onUpdate(id, valueInput);
            history.push("/admin/products");
        }else{

       
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
                   
                    ...data,
                    image: url,
                };
                console.log(newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onUpdate(id, newData);
                
                history.push("/admin/products");
             
            });
        });
    };
    };
  
    // const onHandleSubmit = data => {
        
    //     if(data){
    //         if(!id) {
    //             onAdd(valueInput);
               
                
    //         }else{
    //             onUpdate(id, valueInput);
              
    //         }
           
    //     }
    //     history.push('/admin/products');
    // }
    

  return (
      <div>
          <div className="main-panel">
              <div className="card shadow ml-10">
                  <div className="card-body">
                      <div className="table-responsive">
                          <form onSubmit={handleSubmit(onHandleSubmit)}>
                       
                                     
                                    Name Product 
                                        <input defaultValue={valueInput.name || ""} className="form-control"
                                          ref={register({
                                            required: true,
                                            minLength:2
                                            
                                          })}
                                          name="name" type="text"  onChange={onHandleChange}
                                          ></input>
                                          {errors.name && errors.name.type ==='required'&&<span className='text-danger'>Bạn ko để trống tên</span>}
                                          
                                    <br/>
                                      
                                   
                                        
                                       Image <input className="form-control" border="0px" 
                                        
                                        ref={register({
                                            required: true,
                                       
                                            
                                          })}
                                          type="file" name="image" onChange={onHandleChange}
                                        ></input>
                                          {errors.image && errors.image.type ==='required'&&<span className='text-danger'>Bạn ko để trống ảnh</span>}
                                          <br/>
                                          <img src={product.image} width="100"></img>
                               
                                      <br/>
                                      Price<input className="form-control" 
                                      ref={register({
                                        required: true,
                              
                                        
                                      })}
                                       onChange={onHandleChange} defaultValue={valueInput.price || ""} name="price"></input>
                                       {errors.price && errors.price.type ==='required'&&<span className='text-danger'>Bạn ko để trống </span>}
                                 
                                     Sale<input className="form-control" 
                                      ref={register({
                                        required: true,
                              
                                        
                                      })}
                                       onChange={onHandleChange} defaultValue={valueInput.sale || ""} name="sale"></input>
                                       {errors.sale && errors.sale.type ==='required'&&<span className='text-danger'>Bạn ko để trống </span>}
                                   <br/>
                                      Danh mục
                                    <select className="form-control" name="id_cate" ref={register} onChange={onHandleChange}>
                                      
                                    <option value={0}>Choose Category</option>
                                    {categories.map(({ id, name }) => (
                                    <option value={id}>{name}</option>
                                    ))}
                                    </select>
                                        Detail
                                    
                                    <textarea className="form-control" rows="3"ref={register({
                                        required: true,
                              
                                        
                                      })} onChange={onHandleChange} defaultValue={valueInput.detail || ""} name="detail" />
                                   {errors.detail && errors.detail.type ==='required'&&<span className='text-danger'>Bạn ko để trống </span>}
                                     <br/>    
                                          <button className="btn btn-primary" >Update</button>
                                     
                        
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
  );
};

DetailProduct.propTypes = {};

export default DetailProduct;
