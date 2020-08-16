import React from 'react';

export default function Navbar() {
    return (
        <div>
            <div className="main">
          <div className="wrap">
            <div className="section group">
              <div className="cont span_2_of_3">        	               	
                <h2 className="head">Sản phẩm mới nhất</h2>	
                <div className="section group">
                  <div className="col_1_of_3 span_1_of_3">
                    <a href="single.html">
                      <div className="inner_content clearfix">
                        <div className="product_image">
                          <img src="images/sach1.jpg" alt="" width="155"/>
                        </div>
                        <div className="sale-box"><span className="on_sale title_shop">Mới</span></div>	
                        <div className="price">
                          <div className="cart-left">
                            <p className="title">Thằng quỷ nhỏ</p>
                            <div className="price1">
                              <span className="actual">50.000 đ</span>
                            </div>
                          </div>
                          <div className="cart-right"> </div>
                          <div className="clear" />
                        </div>				
                      </div>
                    </a>
                  </div>
                  <div className="col_1_of_3 span_1_of_3">
                    <a href="single.html">
                      <div className="inner_content clearfix">
                        <div className="product_image">
                          <img src="images/sach2.jpg" alt="" width="175" />
                        </div>
                        <div className="sale-box"><span className="on_sale title_shop">Mới</span></div>	
                        <div className="price">
                          <div className="cart-left">
                            <p className="title">Bạn với bầu trời</p>
                            <div className="price1">
                              <span className="actual">50.000 đ</span>
                            </div>
                          </div>
                          <div className="cart-right"> </div>
                          <div className="clear" />
                        </div>				
                      </div>
                    </a>
                  </div>
                  <div className="col_1_of_3 span_1_of_3">
                    <a href="single.html">
                      <div className="inner_content clearfix">
                        <div className="product_image">
                          <img src="images/sach4.jpg" alt=""width="169" />
                        </div>
                        <div className="sale-box"><span className="on_sale title_shop">Mới</span></div>	
                        <div className="price">
                          <div className="cart-left">
                            <p className="title">Đi qua hoa cúc</p>
                            <div className="price1">
                              <span className="actual">50.000 đ</span>
                            </div>
                          </div>
                          <div className="cart-right"> </div>
                          <div className="clear" />
                        </div>				
                      </div>
                    </a>
                  </div>
                  <div className="clear" />
                </div>			 						 			    
              </div>
              <div className="rsidebar span_1_of_left">
                <div className="top-border"> </div>
                <br></br>
                <br></br>
                <div className="top-border"> </div>
                <div className="sidebar-bottom">
                  <h2 className="m_1">Đăng ký<br /> Gmail</h2>
                  <p className="m_text" >Để nhận thông tin mới nhất về sản phẩm</p>
                  <div className="subscribe">
                    <form>
                      <input name="userName" type="text" className="textbox" />
                      <input type="submit" defaultValue="Subscribe" />
                    </form>
                  </div>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
        </div>
    )
}