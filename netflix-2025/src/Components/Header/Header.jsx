// import React from 'react'
// import './Header.css'

// import NetflixLogo from '../../../src/assets/images/NetflixLogo.jpg'
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// function Header() {
//   return (
//     <div className='header-outer-container'>
//       <div className="header_container">
//         <div className="header_left">
//           <ul>
//             <li>
//               <img src={NetflixLogo} alt="Netflix Logo" width="100"/>
//             </li>
//             <li>Home</li>
//             <li>TV Shows</li>
//             <li>Movies</li>
//             <li>Latest</li>
//             <li>My List</li>
//             <li>Browse by Languages</li>
//           </ul>
//         </div>
//         <div className="header_right">
//           <ul>
//             <li><SearchIcon/></li>
//             <li><NotificationsNoneIcon/></li>
//             <li><AccountBoxIcon/></li>
//             <li><ArrowDropDownIcon/></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;







//bootstrap
import React from "react";
import NetflixLogo from "../../../src/assets/images/NetflixLogo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css'


function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark-custom text-white sticky-top">
      <div className="container-fluid">
        {/* Netflix Logo */}
        <a className="navbar-brand" href="#">
          <img src={NetflixLogo} alt="Netflix Logo" width="100" />
        </a>

        {/* Hamburger toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links and icons */}
        <div className="collapse navbar-collapse" id="navbarResponsive">
          {/* Left nav links */}
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Latest
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Browse by Languages
              </a>
            </li>
          </ul>

          {/* Right icons */}
          <ul className="navbar-nav ms-auto mb-2 mb-md-0  d-flex align-items-left gap-3">
            <li className="nav-item">
              <SearchIcon style={{ color: "white", cursor: "pointer" }} />
            </li>
            <li className="nav-item">
              <NotificationsNoneIcon
                style={{ color: "white", cursor: "pointer" }}
              />
            </li>
            <li className="nav-item">
              <AccountBoxIcon style={{ color: "white", cursor: "pointer" }} />
            </li>
            <li className="nav-item">
              <ArrowDropDownIcon
                style={{ color: "white", cursor: "pointer" }}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
