import React from 'react'
import PropTypes from 'prop-types'
import {Link } from "react-router-dom";
const Home = ({products, categories}) => {

    return (
        <div>
       
<div>
  {/* CATEGORIES */}
  <br/>
  
  <section className="pt-6">

    <div className="container-fluid px-3 px-md-6">

      <div className="row mx-n3">
        {categories.map(({id,  name, image }, index) => (
        <div className="col-12 col-sm-4 d-flex flex-column px-3">
          {/* Card*/}
          <div className="card card-xl mb-3 mb-sm-0" style={{minHeight: '280px'}}>
            {/* Background */}
            <Link className="card-bg" to={`/ShowSP/${id}`}>
              {/* <div className="card-bg-img bg-cover" style={{backgroundImage: 'url(assets/img/products/product-22.jpg)'}} /> */}
              <img src={image} alt="" width="472px" height="278px"/>
            </Link>
            {/* Body */}
            <div className="card-body my-auto">
              {/* Heading */}
  <h5 className="mb-0">{name}</h5>
              {/* Link */}
              <Link className="btn btn-link stretched-link px-0 text-reset"to={`/ShowSP/${id}`}>
                Shop Now <i className="fe fe-arrow-right ml-2" />
              </Link>
            </div>
          </div>
        </div>
        
         ))}
      </div>
   
    </div>
 
  </section>


  {/* ARRIVALS */}
  <section className="pt-7 pb-12">
  <div className="container">
    <div className="row">
      <div className="col-12">
        {/* Heading */}
        <h2 className="mb-10 text-center">New Arrivals</h2>
      </div>
    </div>

    <div className="row">
    {products.map(({ id, name, image, price }, index) => (
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
              <img className="card-img-top" src={image} alt="..." width='268px' height='317px' />
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
                  {name}
                  </Link>
                 
                </div>
                <div className="col-auto">
                  {/* Price */}
                  <div className="font-size-sm font-weight-bold text-muted">
                   {price}$
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
    ))}
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

        </div>
    )
}

Home.propTypes = {

}

export default Home
