import React from 'react'
import PropTypes from 'prop-types';
import {Link } from "react-router-dom";
import Categories from '../Categories';
import parse from 'html-react-parser';
const ProductsManager = ({ products, onRemove,categories }) => {
    const removeHandle = (id) => {
        onRemove(id)
    }
   
    const onCate = (id_cate) =>{
        const newCate = categories.filter((cate)=>cate.id == id_cate);
        console.log(newCate);
        if(newCate!=0){
            const id_cate = newCate[0].name;
            return id_cate;
        }else{
            return ("No Cate");
        }
    } 
    const CKeditor = (desc)=>{
      return parse(desc);
    };

    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
      
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                   
                    <Link class="btn btn-success" to="/admin/product/add" >Add Product</Link>
                  
                   
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Sale</th>
                                    <td scope="col">Categories</td>
                                    <td scope="col">Title</td>
                                    {/* <th scope="col">Detail</th> */}
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, name, image, price,detail,sale, id_cate, desc }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td><Link to={`./detail/${id}`}>{name}</Link></td>
                                        <td><img src={image} alt="" width="50px" /></td>
                                        <td>{price} </td>
                                        <td>{sale} </td>
                                        <td>{onCate(id_cate)}</td>
                                        <td>{detail}</td>
                                        {/* <td>{CKeditor(desc)}</td> */}
                                        <td>
                          
                                            <button className="btn btn-danger m-1"  onClick={() => {if(window.confirm('Bạn có muốn xóa?')){removeHandle(id)};}}>Xóa</button>
                                            <button className="btn btn-primary"><Link className='text-light' to={`./detail/${id}`}>Sửa</Link></button>
                                          
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

}

export default ProductsManager
