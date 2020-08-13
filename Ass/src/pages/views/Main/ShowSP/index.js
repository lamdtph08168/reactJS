import React from 'react'
import PropTypes from 'prop-types'
import {Link, useParams} from "react-router-dom";
const ShowSP = ({products, categories}) => {
    let {id}= useParams();
    return (
        <div>
        <section className="pt-7 pb-12">
  <div className="container">
    <div className="row">
      <div className="col-12">
        {/* Heading */}
        <h3 className="mb-10 text-center">Product</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        {/* Filters */}
      
        <div className="btn-group-justified btn-group-expand-lg mb-10" role="group">
        {/* show danh mục */}
          {categories.map(({ id, name}, index) => (
          <div className="btn-group dropdown">
            {/* Toggle */}
            <Link className="btn btn-sm btn-block btn-outline-border dropdown-toggle" to={`/ShowSP/${id}`} data-toggle="dropdown" data-display="static">
              {name}
            </Link>
            {/* Menu */}
          
          </div>
       
         ))}
        </div>
       
      </div>
    </div>
    <div className="row">
    {products.map((product, index) => {
     if(product.id_cate==id) {
         return(
   
      <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        {/* Card */}
        <div className="card mb-7" data-toggle="card-collapse">
          {/* Badge */}
          <div className="badge badge-white card-badge card-badge-left text-uppercase">
            New
          </div>
          {/* Image */}
          <div className="card-img" data-flickity="{&quot;draggable&quot;: false}" id="productEightImg">
            <Link className="d-block w-100" to={`/detail/${id}`}>
              <img className="card-img-top" src={product.image} alt="..." width='253px' height='189px' />
            </Link>
  
          </div>
          {/* Collapse */}
          <div className="card-collapse-parent">
            {/* Body */}
            <div className="card-body px-0 pb-0 bg-white">
              <div className="row no-gutters">
                <div className="col">
                  {/* Title */}
                  <Link className="d-block font-weight-bold text-body" to={`/detail/${id}`}>
                  {product.name}
                  </Link>
                 
                </div>
                <div className="col-auto">
                  {/* Price */}
                  <div className="font-size-sm font-weight-bold text-muted">
                   {product.price}$
                  </div>
                </div>
              </div>
            </div>
            {/* Footer */}
            <div className="card-collapse collapse">
              <div className="card-footer px-0 bg-white">
                <form>
                  <div className="mb-1">
                    <div className="custom-control custom-control-inline custom-control-color">
                      <input type="radio" id="productEightColorOne" name="productEightColor" className="custom-control-input" defaultChecked />
                      <label className="custom-control-label" data-toggle="flickity" data-target="#productEightImg" data-slide={0} style={{color: 'black'}} htmlFor="productEightColorOne" />
                    </div>
                    <div className="custom-control custom-control-inline custom-control-color ml-n2">
                      <input type="radio" id="productEightColorTwo" name="productEightColor" className="custom-control-input" />
                      <label className="custom-control-label" data-toggle="flickity" data-target="#productEightImg" data-slide={1} style={{color: 'red'}} htmlFor="productEightColorTwo" />
                    </div>
                  </div>
                  <div>
                    <div className="custom-control custom-control-inline custom-control-text font-size-xs">
                      <input type="radio" id="productEightSizeOne" name="sizeRadio" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="productEightSizeOne">6</label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-text font-size-xs">
                      <input type="radio" id="productEightSizeTwo" name="sizeRadio" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="productEightSizeTwo">6.5</label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-text font-size-xs">
                      <input type="radio" id="productEightSizeThree" name="sizeRadio" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="productEightSizeThree">7</label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-text font-size-xs">
                      <input type="radio" id="productEightSizeFour" name="sizeRadio" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="productEightSizeFour">7.5</label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-text font-size-xs">
                      <input type="radio" id="productEightSizeFive" name="sizeRadio" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="productEightSizeFive">8.5</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      )}
    })} 
    </div>
    <div className="row">
      <div className="col-12">
        {/* Progress */}
        <div className="row justify-content-center mt-7">
          <div className="col-12 text-center">
            {/* Caption */}
            <p className="font-size-sm text-muted">
              Showing 16 of 24 products
            </p>
            {/* Progress */}
            <div className="progress mx-auto mb-7" style={{maxWidth: '250px'}}>
              <div className="progress-bar bg-dark" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
            </div>
            {/* Button */}
            <a className="btn btn-sm btn-outline-dark" href="#!">
              Load more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>

      </div>
  
  
    )
}

ShowSP.propTypes = {

}

export default ShowSP
