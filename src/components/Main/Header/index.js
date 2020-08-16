import React from 'react'

const Header = props => {
    return (
        <div>
        <div className="header-top">
          <div className="wrap"> 
            <div className="header-top-left">
              <div className="box">
                <select tabIndex={4} className="dropdown">
                  <option value className="label">Ngôn ngữ :</option>
                  <option value={1}>English</option>
                  <option value={2}>French</option>
                  <option value={3}>German</option>
                </select>
              </div>
              <div className="box1">
                <select tabIndex={4} className="dropdown">
                  <option value className="label">Đơn vị tiền :</option>
                  <option value={1}>$ Dollar</option>
                  <option value={2}>€ Euro</option>
                </select>
              </div>
              <div className="clear" />
            </div>
            <div className="cssmenu">
              <ul>
                <li className="active"><a href="login.html">Tài khoản</a></li> |
                <li><a href="checkout.html">Danh sách yêu thích</a></li> |
                <li><a href="checkout.html">Thanh toán</a></li> |
                <li><a href="login.html">Đăng nhập</a></li> |
                <li><a href="register.html">Đăng ký</a></li>
              </ul>
            </div>
            <div className="clear" />
          </div>
        </div>
        <div className="header-bottom">
          <div className="wrap">
            <div className="header-bottom-left">
              <div className="logo">
                <a href="index.html"><img src="images/logo.png" alt="" /></a>
              </div>
              <div className="menu">
                <ul className="megamenu skyblue">
                  <li className="active grid"><a href="index.html">Trang chủ</a></li>
                  <li><a className="color4" href="#">Sách truyện</a>
                  </li>				
                  <li><a className="color5" href="#">Văn học</a>
                  </li>
                  <li><a className="color6" href="other.html">Khác</a></li>
                </ul>
              </div>
            </div>
            <div className="header-bottom-right">
              <div className="search">	  
                <input type="text" name="s" className="textbox" defaultValue="Tìm kiếm" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search';}" />
                <input type="submit" defaultValue="Subscribe" id="submit" name="submit" />
                <div id="response"> </div>
              </div>
              <div className="tag-list">
                {/* <ul className="icon1 sub-icon1 profile_img">
                  <li><a className="active-icon c1" href="#"> </a>
                    <ul className="sub-icon1 list">
                      <li><h3>sed diam nonummy</h3><a href /></li>
                      <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href>adipiscing elit, sed diam</a></p></li>
                    </ul>
                  </li>
                </ul> */}
                <ul className="icon1 sub-icon1 profile_img">
                  <li><a className="active-icon c2" href="#"> </a>
                    <ul className="sub-icon1 list">
                      <li><h3>No Products</h3><a href /></li>
                      <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href>adipiscing elit, sed diam</a></p></li>
                    </ul>
                  </li>
                </ul>
                <ul className="last"><li><a href="#">Giỏ(0)</a></li></ul>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* start slider */}
        <div id="fwslider">
          <div className="slider_container">
            <div className="slide"> 
              {/* Slide image */}
              <img src="images/slide11.jpg" alt="" height="600"/>
              {/* /Slide image */}
              {/* Texts container */}
              <div className="slide_content">
                <div className="slide_content_wrap">
                  {/* Text title */}
                  <h4 className="title">Cam kết</h4>
                  {/* /Text title */}
                  {/* Text description */}
                  <p className="description">Chính hãng</p>
                  {/* /Text description */}
                </div>
              </div>
              {/* /Texts container */}
            </div>
            {/* /Duplicate to create more slides */}
            <div className="slide">
              <img src="images/slide.jpg" alt="" height="600" />
              <div className="slide_content">
                <div className="slide_content_wrap">
                  <h4 className="title">Hoàn tiền 100%</h4>
                  <p className="description">Cho đơn hàng trả lại</p>
                </div>
              </div>
            </div>
            {/*/slide */}
          </div>
          <div className="timers" />
          <div className="slidePrev"><span /></div>
          <div className="slideNext"><span /></div>
        </div>
        {/*/slider */}
      </div>
    )
}

export default Header
