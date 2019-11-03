import React from 'react';
import {connect} from 'react-redux';
import MiniCart from './miniCart';

class  ProductListing extends React.Component {

   addToCart = (data) =>{
        console.log("dispatching: ",data);
        this.props.dispatch({type:'ADD', data})
   }
   render() {
      return (<div>
         <div className="container py-5">
            <div className="row">
               <div className="col-lg-8 mx-auto">
                  <MiniCart />
                  <ul className="list-group shadow">

                     <li className="list-group-item">
                        <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                           <div className="media-body order-2 order-lg-1">
                              <h5 className="mt-0 font-weight-bold mb-2">Awesome product</h5>
                              <p className="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
                              <div className="d-flex align-items-center justify-content-between mt-1">
                                 <h6 className="font-weight-bold my-2">$120.00</h6>
                                 <button type="button" className="btn btn-sm btn-primary btn-success" onClick={()=>{this.addToCart({id:1, price:'$120',name:'Nike Shoe'})}}>Add to Cart</button>
                                 <ul className="list-inline small">
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star-o text-gray"></i></li>
                                 </ul>
                              </div>
                           </div><img src="https://res.cloudinary.com/mhmd/image/upload/v1556485076/shoes-1_gthops.jpg" alt="Generic placeholder" width="200" className="ml-lg-5 order-1 order-lg-2" />
                        </div>
                     </li>

                     <li className="list-group-item">
                        <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                           <div className="media-body order-2 order-lg-1">
                              <h5 className="mt-0 font-weight-bold mb-2">Awesome product</h5>
                              <p className="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
                              <div className="d-flex align-items-center justify-content-between mt-1">
                                 <h6 className="font-weight-bold my-2">$99.00</h6>
                                 <button type="button" className="btn btn-sm btn-primary btn-success" onClick={()=>{this.addToCart({id:1, price:'$99',name:'Parrot green Shoe'})}}>Add to Cart</button>
                                 <ul className="list-inline small">
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                 </ul>
                              </div>
                           </div><img src="https://res.cloudinary.com/mhmd/image/upload/v1556485077/shoes-3_rk25rt.jpg" alt="Generic placeholder" width="200" className="ml-lg-5 order-1 order-lg-2" />
                        </div>
                     </li>

                     <li className="list-group-item">
                        <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                           <div className="media-body order-2 order-lg-1">
                              <h5 className="mt-0 font-weight-bold mb-2">Awesome product</h5>
                              <p className="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
                              <div className="d-flex align-items-center justify-content-between mt-1">
                                 <h6 className="font-weight-bold my-2">$140.00</h6>
                                 <button type="button" className="btn btn-sm btn-primary btn-success" onClick={()=>{this.addToCart({id:1, price:'$140',name:'Green Shoe'})}}>Add to Cart</button>
                                 <ul className="list-inline small">
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star-o text-gray"></i></li>
                                 </ul>
                              </div>
                           </div><img src="https://res.cloudinary.com/mhmd/image/upload/v1556485078/shoes-2_g4qame.jpg" alt="Generic placeholder" width="200" className="ml-lg-5 order-1 order-lg-2" />
                        </div>
                     </li>

                     <li className="list-group-item">
                        <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                           <div className="media-body order-2 order-lg-1">
                              <h5 className="mt-0 font-weight-bold mb-2">Awesome product</h5>
                              <p className="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
                              <div className="d-flex align-items-center justify-content-between mt-1">
                                 <h6 className="font-weight-bold my-2">$220.00</h6>
                                 <button type="button" className="btn btn-sm btn-primary btn-success" onClick={()=>{this.addToCart({id:1, price:'$220',name:'Brown Shoe'})}}>Add to Cart</button>
                                 <ul className="list-inline small">
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                 </ul>
                              </div>
                           </div><img src="https://res.cloudinary.com/mhmd/image/upload/v1556485078/shoes-4_vgfjy9.jpg" alt="Generic placeholder" width="200" className="ml-lg-5 order-1 order-lg-2" />
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>)
   }
}

export default  connect()(ProductListing);