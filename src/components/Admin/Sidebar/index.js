import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = props => {
    return (
        <ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="">
          <div className="sidebar-brand-icon">
            <img src="img/logo/logo2.png" />
          </div>
          <div className="sidebar-brand-text mx-3">BEST QUOTES</div>
        </a>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <a className="nav-link" href="">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Thanh điều khiển</span></a>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">
          Quản lý
        </div>
        <li className="nav-item">
          <a className="nav-link collapsed" href="" data-toggle="collapse" data-target="#collapseBootstrap" aria-expanded="true" aria-controls="collapseBootstrap">
            <i className="far fa-fw fa-window-maximize" />
          <Link to="/admin/products">Sản phẩm</Link> 
          </a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseForm" aria-expanded="true" aria-controls="collapseForm">
            <i className="fab fa-fw fa-wpforms" />
            <span>Forms</span>
          </a>
          <div id="collapseForm" className="collapse" aria-labelledby="headingForm" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Forms</h6>
              <a className="collapse-item" href="form_basics.html">Form Basics</a>
              <a className="collapse-item" href="form_advanceds.html">Form Advanceds</a>
            </div>
          </div>
        </li> */}
        <hr className="sidebar-divider" />
        <div className="version" id="version-ruangadmin" />
      </ul>
    )
}

export default Sidebar
