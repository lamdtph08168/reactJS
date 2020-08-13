import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
const Categories = ({categories, onRemoveCate}) => {

    const RemoveCate = (id) =>{
        onRemoveCate(id) 
        
    }
    return (
        <div>
        {/* Page Heading */}
        <h1 className="h3 mb-2 text-gray-800">Tables</h1>
  
        {/* DataTales Example */}
        <div className="card shadow mb-4">
            <div className="card-header py-3">
               
                <Link class="btn btn-success" to="/admin/category/add" >Add Category</Link>
              
               
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map(({ id, name, image}, index) => (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td><Link to={`./category/${id}`}>{name}</Link></td>
                                    <td><img src={image} alt="" width="150px"/></td>  
                                    <td>
                      
                                        <button className="btn btn-danger m-1" onClick={() => {if(window.confirm('Bạn có muốn xóa?')){RemoveCate(id)};}}>Xóa</button>
                                        <button className="btn btn-primary"><Link className='text-light' to={`./category/${id}`}>Sửa</Link></button>
                                      
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

Categories.propTypes = {

}

export default Categories
