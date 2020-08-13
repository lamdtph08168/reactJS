import React, { useState } from 'react';
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import firebase from "../../../../firebase";
const DetailCate = ({onAddCate, categories, onEditCate}) => {
    const {id} = useParams();
    const history = useHistory();
    const {register, handleSubmit, errors} = useForm();
    const category = id?categories.find(category => category.id == id) : {};
    const [valueInput, setValueInput] = useState(category);
    const onChange = (e) =>{
        const { name, value}= e.target;
        setValueInput({
            ...valueInput,
            [name]: value
        })
    }
    const onSubmit = (data) => {
        //upimage
        if(!data.image[0]){
            onEditCate(id, valueInput);
            history.push("/admin/category");
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
                onEditCate(id, newData);
                history.push("/admin/category");
             
            });
        });
    };
    };

    // const onSubmit = data =>{
    //     if(data){
    //         if(!id){
    //             onAddCate(valueInput);

    //         }else{
    //             onEditCate(id, valueInput);
    //         }
    //     }
    //     history.push('/admin/category');
    // }
    
    return (
        <div>
        <div className="main-panel">
            <div className="card shadow ml-10">
                <div className="card-body">
                    <div className="table-responsive">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input defaultValue={valueInput.name || ""} className="form-control"
                                        ref={register({
                                          required: true,
                                          minLength:2
                                          
                                        })}
                                        name="name" type="text"  onChange={onChange}
                                        ></input>
                                        {errors.name && errors.name.type ==='required'&&<span className='text-danger'>Bạn ko để trống tên</span>}
                                        
                                    </td>
                                        <td>
                                        <img src={category.image} width="100"></img>
                                       <input  border="0px" 
                                        
                                        ref={register({
                                            required: true,
                                       
                                            
                                          })}
                                          type="file" name="image" onChange={onChange}
                                        ></input>
                                          {errors.image && errors.image.type ==='required'&&<span className='text-danger'>Bạn ko để trống ảnh</span>}
                                     
                                         
                               
                                        </td>
                                    
                                 
                                    <td>
                                       
                                        <button className="btn btn-primary" >Update</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

DetailCate.propTypes = {

}

export default DetailCate
