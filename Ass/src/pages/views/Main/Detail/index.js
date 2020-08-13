import React ,{useEffect} from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import {Link} from "react-router-dom";
const Detail = ({products}) => {
  const {id} = useParams();
  useEffect(() => {
    window.scrollTo(0, 0)
    
    }, [])
  const product = id?products.find(product => product.id == id) : {};
    return (
        <div>
            <div>
  {/* PRODUCT */}
  <br/>
  <br/>
  <section>
  
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-6">
              {/* Card */}
              <div className="card">
                {/* Badge */}
                <div className="badge badge-primary card-badge text-uppercase">
                  Sale
                </div>
                {/* Slider */}
                <div className="mb-4" data-flickity="{&quot;draggable&quot;: false, &quot;fade&quot;: true}" id="productSlider">
                  {/* Item */}
                  <a href="#" data-fancybox>
                    <img src={product.image} alt="..." className="card-img-top" />
                  </a>
                
                 
                </div>
              </div>
              {/* Slider */}
              <div className="flickity-nav mx-n2 mb-10 mb-md-0" data-flickity="{&quot;asNavFor&quot;: &quot;#productSlider&quot;, &quot;contain&quot;: true, &quot;wrapAround&quot;: false}">
                {/* Item */}
                <div className="col-12 px-2" style={{maxWidth: '113px'}}>
                  {/* Image */}
                  <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{backgroundImage: 'url(assets/img/products/product-7.jpg)'}} />
                </div>
                {/* Item */}
                <div className="col-12 px-2" style={{maxWidth: '113px'}}>
                  {/* Image */}
                  <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{backgroundImage: 'url(assets/img/products/product-122.jpg)'}} />
                </div>
                {/* Item */}
                <div className="col-12 px-2" style={{maxWidth: '113px'}}>
                  {/* Image */}
                  <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{backgroundImage: 'url(assets/img/products/product-146.jpg)'}} />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 pl-lg-10">
              {/* Header */}
              <div className="row mb-1">
                <div className="col">
                  {/* Preheading */}
                  {/* <a className="text-muted" href="shop.html">Sneakers</a> */}
                </div>
                <div className="col-auto">
                  {/* Rating */}
                  <div className="rating font-size-xs text-dark" data-value={4}>
                    <div className="rating-item">
                      <i className="fas fa-star" />
                    </div>
                    <div className="rating-item">
                      <i className="fas fa-star" />
                    </div>
                    <div className="rating-item">
                      <i className="fas fa-star" />
                    </div>
                    <div className="rating-item">
                      <i className="fas fa-star" />
                    </div>
                    <div className="rating-item">
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  
                </div>
              </div>
              {/* Heading */}
              <h3 className="mb-2">{product.name}</h3>
              {/* Price */}
              <div className="mb-7">
                {/* <span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">$115.00</span> */}
    <span className="ml-1 font-size-h5 font-weight-bolder text-primary"> <strike> {product.sale}$</strike></span> 
  
              </div>
              <div className="mb-7">
                {/* <span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">$115.00</span> */}
    <span className="ml-1 font-size-h5 font-weight-bolder text-primary">{product.price}$</span>
  
              </div>
              <p>{product.detail}</p>
              

              {/* Form */}
              <form>
           

                <div className="form-group">
                  <div className="form-row mb-7">
                   
                    <div className="col-12 col-lg">
                      {/* Submit */}
                      <button type="submit" className="btn btn-block btn-dark mb-2">
                        Add to Cart <i className="fe fe-shopping-cart ml-2" />
                      </button>
                    </div>
                    
                  </div>
               

              
               
                
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>

  {/* PRODUCTS */}
  <section className="pt-11">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Heading */}
          <h4 className="mb-10 text-center">You might also like</h4>
          {/* Items */}

          <div className="row">
          {products.map(({ id, name, image, price, sale, detail }, index) => (
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-md-none d-lg-block">
              {/* Card */}
              <div className="card mb-7">
                {/* Image */}
                <div className="card-img">
                  {/* Image */}
                  <Link to={`/detail/${id}`}>
                    <img className="card-img-top card-img-front" src={image} alt="..." with='253px' height='189px'/>
                  </Link>
                  {/* Actions */}
                  <div className="card-actions">
                    <span className="card-action">
                      <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                        <i className="fe fe-eye" />
                      </button>
                    </span>
                    <span className="card-action">
                      <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                        <i className="fe fe-shopping-cart" />
                      </button>
                    </span>
                    <span className="card-action">
                      <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                        <i className="fe fe-heart" />
                      </button>
                    </span>
                  </div>
                </div>
                {/* Body */}
                <div className="card-body px-0">
                  {/* Category */}
                 
                  {/* Title */}
                  <div className="font-weight-bold">
                    <Link className="text-body" to={`/detail/${id}`}>
                      {name}
                    </Link>
                  </div>
                  {/* Price */}
                  <div className="font-weight-bold text-muted">
                  {price}$
                  </div>
          
                 
               
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

        </div>
    )
}

Detail.propTypes = {

}

export default Detail
