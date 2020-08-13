import React from 'react'
import PropTypes from 'prop-types'
import {
    
    Link
  
  } from "react-router-dom";
const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <Link className="nav-link" to="/admin">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></Link>
            </li>
            {/* Divider */}
            <div className="sidebar-heading">
                Danh mục 
    </div>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/admin/category" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog" />
                    <span>List Categories</span>
                </Link>
                
            </li>
       
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/admin/category/add" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench" />
                    <span>Add Categories</span>
                </Link>
                
            </li>
            <hr className="sidebar-divider" />
            {/* Heading */}

            <div className="sidebar-heading">
                Sản phẩm
    </div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/admin/products" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog" />
                    <span>List Products</span>
                </Link>
                
            </li>
       
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/admin/product/add" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench" />
                    <span>Add Products</span>
                </Link>
                
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
           
           
        
            <li className="nav-item active">
                <a className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table" />
                    <span>Tables</span></a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>
        </ul>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
