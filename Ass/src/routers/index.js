import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import AddProducts from '../pages/views/Admin/AddProducts'
import DetailProduct from '../pages/views/Admin/DetailProduct'
import Categories from '../pages/views/Admin/Categories'
import AddCate from '../pages/views/Admin/AddCategories'
import DetailCate from '../pages/views/Admin/DetailCategories'
//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Product from '../pages/views/Main/Product'
import Detail from '../pages/views/Main/Detail'
import ShowSP from '../pages/views/Main/ShowSP';

const Routers = ({ products,   categories, onRemove, onAdd, onUpdate, 
                   onRemoveCate,  onAddCate, onEditCate}) => {
    const onHandleRemove =  (id) => {
        onRemove(id)
    }
    const onHandleAdd = (products) => {
        onAdd(products)
    }
    const onHandleUpdate = (id, product) =>{
        onUpdate(id, product)
    }

    const HandleRemove =  (id) => {
        onRemoveCate(id)
    }
    const HandleAdd = (categories) => {
        onAddCate(categories)
    }
    const HandleEdit = (id, categories) =>{
        onEditCate(id, categories)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?/:path?/:path?/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin/' exact render={(props)=>
                                <Dashboard {...props}/>}>
                            </Route>
                        {/* Products */}
                            <Route path='/admin/products' render={(props)=>
                                <ProductsManager  {...props} products={products} categories={categories} onRemove={onHandleRemove} />}>
                            </Route>
                            <Route path='/admin/product/add'  render={(props)=>
                                <AddProducts {...props} onAdd={onHandleAdd} categories={categories}/>}>
                            </Route>
                            <Route path='/admin/detail/:id'  render={(props)=>
                                <DetailProduct {...props} products={products} categories={categories} onUpdate={onHandleUpdate} />}>
                            </Route>
                        {/* Categories */}
                            <Route path='/admin/category' exact   render={(props)=>
                                <Categories {...props} categories={categories} onRemoveCate={HandleRemove} />}>
                            </Route>   
                            <Route path='/admin/category/add'  exact  render={(props)=>
                                <AddCate {...props} categories={categories} onAddCate={HandleAdd} />}>
                            </Route> 
                            <Route path='/admin/category/:id'  render={(props)=>
                                <DetailCate {...props} categories={categories} onEditCate={HandleEdit} />}>
                            </Route> 
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route path="/:path?/:path?/:path?" exact>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products}  categories={categories} />
                            </Route>
                            <Route path="/product" >
                                <Product  products={products} categories={categories}/>
                            </Route>    
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/detail/:id">
                                <Detail  products={products} />
                            </Route>
                            <Route path="/showSP/:id">
                                <ShowSP products={products} categories={categories}/>
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
