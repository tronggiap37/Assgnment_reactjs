import React from 'react'
import PropTypes from 'prop-types';
import style from './Home.css';
// const divstyle={
//   float: 'left',
//   width: '50px',
//   height: '50px'
// };
const Home = ({ products }) => {

  // const styleimg={  
  //     float: 'left',
  //     width: '33.33%',
  //     padding: '5px'  
  // }

  return (
    <div className="main">
      <div className="wrap">
        <div className="section group">
          <div className="cont span_3_of_3" style={{float:"left"}}>
            <h2 className="head">Sắp ra mắt</h2>
            {/* <div className="section group"> */}
            {products.map(({ id, name, image, mota, number, price, status }, index) => (
              <div className="col_1_of_3 span_3_of_3">
                <a href="single.html">
                  <div className="inner_content clearfix">
                    <div className="product_image">
                       <img src={image} alt="" width="250" height="200" />
                    </div>
                    <div className="sale-box"><span className="on_sale title_shop">Mới-{id}</span></div>
                    <div className="price">
                      <div className="cart-left">
                        <p className="title">{name}</p>
                        <div className="price1">
                          <span className="actual">{price}</span>
                        </div>
                      </div>
                      <div className="cart-right"> </div>
                      <div className="clear" />
                    </div>
                  </div>
                </a>
              </div>
              //   <div className="clear" />

              // </div>		
            ))}
          </div>

          <div className="clear" />
        </div>
      </div>
    </div>
    // </div>



  )
}
Home.propTypes = {
  products: PropTypes.array
}
export default Home
