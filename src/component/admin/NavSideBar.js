import { Link } from "react-router-dom";
import "../../styles/navSideBar.css";

import halte from "../../asset/images/halte.png";
import home from "../../asset/images/home.png";
import house from "../../asset/images/house.png";
import laporan from "../../asset/images/laporan.png";
import tarif from "../../asset/images/tarif.png";
import logo from "../../asset/images/logoSide.png";

function NavSideBar({children}) {

  const sidebarToggle = (event) => {
    event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
  }

  return (
    <div className="d-flex" id="wrapper">
      {/*<!-- Sidebar-->*/}
      <div className="border-end bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading border-bottom">
            <img className="me-5 pe-5" src={logo} />
          </div>
          <div className="d-flex flex-column">
              <Link to={"/dashboard"} 
              className={`sidebar-item text-start text-sidebar p-3 ${window.location.pathname === "/dashboard" ? "active-sidebar":""}`}
              >
                <img src={house} alt="Gambar Tidak Ada"/> Beranda
              </Link>
              <Link to={"/dashboard"}
              className={`sidebar-item text-start text-sidebar p-3 ${window.location.pathname === "/dashboard/aku"  ? "active-sidebar":""}`}
              >
                <img src={halte} alt="Gambar Tidak Ada"/> Halte
              </Link>
              <Link to={"/dashboard"} 
              className={`sidebar-item text-start text-sidebar p-3 ${window.location.pathname === "/dashboard/aku" ? "active-sidebar":""}`}
              >
                <img src={tarif} alt="Gambar Tidak Ada"/> Tarif
              </Link>
              <Link to={"/dashboard"} 
              className={`sidebar-item text-start text-sidebar p-3 ${window.location.pathname === "/dashboard/aku" ? "active-sidebar":""}`}
              >
                <img src={laporan} alt="Gambar Tidak Ada"/> Laporan
              </Link>
          </div>
      </div>
      {/*<!-- Page content wrapper-->*/}
      <div id="page-content-wrapper">
          {/*<!-- Top navigation-->*/}
          <nav className="navbar navbar-expand-lg navbar-light border-bottom bg-custom-navbar p-3">
              <div className="container-fluid">
                  <button className="btn btn-success" id="sidebarToggle" onClick={sidebarToggle}>Menu</button>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                          <li className="nav-item"><Link className="nav-link active" to={"/dashboard"}><img src={home}/></Link></li>
                      </ul>
                  </div>
              </div>
          </nav>
          {/*<!-- Page content-->*/}
          <div className="container-fluid">
              <main>{children}</main>
          </div>
      </div>
  </div>
     
  );
}

export default NavSideBar;
