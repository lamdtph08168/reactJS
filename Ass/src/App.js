import React, { useState , useEffect } from 'react';
import Routers from './routers'
import Product from './pages/views/Main/Product';
import apiRequest from "./api/productApi";
import Request from "./api/categoriesApi";
import { wait } from '@testing-library/react';


function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // list danh mục
  useEffect(() => {
    const getCategories = async () =>{
      try {
        const {data} = await Request.getAll();
        setCategories(data);
      }
      catch(error){
        console.log('fail to request api', error);
      }
    }
    getCategories();
  }, [])
  //Xóa danh mục
  const HandleRemove = async (id) => {
    try {
      const {data} = await Request.remove(id);
      const newCate = categories.filter(category => category.id !== id);
      setCategories(newCate);
      alert("Xóa thành công!")
    }
    catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  //Thêm danh mục
  const HandleAdd = async (category) => {
    try {
      const { data } = await Request.create(category);
      setCategories([
        ...categories,
        data
      ])
      alert("Added 1 Category")
    } 
    catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  //Sửa danh mục
  const HandleEdit = async (id,editCate) => {
    try{
      const {data} = await Request.update(id,editCate);
      const newCate = categories.map(category => (category.id === data.id ? editCate:category));
      console.log(newCate);
    setCategories(newCate);
    alert("Update danh mục thành công")
    }
    catch (error) {
      console.log('failed to request API: ', error)
    }
    
  }
  //Danh sách sản phẩm
  useEffect(()=>{
    const getProducts = async () =>{
      try {
        const {data} = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log("failed to request API: ", error);
      }
    };
    getProducts();
  }, []);
  //Xóa sản phẩm
  const onHandleRemove = async (id) => {
    try{
      const {data} = await apiRequest.remove(id);
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
      alert("Bạn xóa thành công") 
    }catch (error){
      console.log("failed to request API: ", error);
    }
  };
  //Thêm sản phẩm
  const onHanleAdd = async (product) => {
    try{
      const {data} = await apiRequest.create(product);
      setProducts([...products, data]);
      alert("Thêm thành công :))")
    } catch (error){
      console.log("failed to request API:", error);
    }
  };
  //Sửa sản phẩm
  
  const onHandleUpdate = async (id, product) => {
   try{
    const {data} = await apiRequest.update(id, product);
    const newPro = products.map((pro) => (pro.id === id ? product : pro));
    setProducts(newPro);
    alert("Update thành công")
   } catch(error){
     console.log("failed to request API:", error);
   }
  };

  return (
    <div className="App">
      <Routers products={products} onRemove={onHandleRemove}  onAdd={onHanleAdd} onUpdate={onHandleUpdate} 
       categories={categories}  onRemoveCate={HandleRemove} onAddCate={HandleAdd} onEditCate={HandleEdit}
      />
    
    </div>
  )

}
export default App;