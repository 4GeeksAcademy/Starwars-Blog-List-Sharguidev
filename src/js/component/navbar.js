import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://github.com/4GeeksAcademy/Starwars-Blog-List-Sharguidev/blob/master/src/img/star-wars-seeklogo.png?raw=true"
            style={{ width: "100px" }}
            className="ms-4"
          ></img>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown me-5">
              <a
                className="nav-link dropdown-toggle btn btn-primary text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites
              </a>
              <ul className="dropdown-menu text-start dropdown-menu-end">
                <li></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
