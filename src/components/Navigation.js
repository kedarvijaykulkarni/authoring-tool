import { Link, useLocation } from "react-router-dom";
import { SVGComponent } from "./";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  const navigate = useNavigate();

  function handleClick() {
    navigate("/logout");
  }

  const isNavLinkActive = (to) => {
    return location.pathname.includes(to);
  };

  return (
    <nav
      data-mdb-navbar-init
      className="navbar navbar-expand-lg navbar-light bg-body-tertiary p-0 border-bottom"
    >
      <div className="container-fluid">
        <a className="navbar-brand mt-2 mt-lg-0" href="/dashboard">
          <SVGComponent.LogoSvg />
        </a>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item fs-5">
              <Link
                to="/dashboard"
                className={
                  isNavLinkActive("dashboard") ? "active nav-link" : "nav-link"
                }
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item fs-5">
              <Link
                to="/authoring"
                className={
                  isNavLinkActive("authoring") ? "active nav-link" : "nav-link"
                }
              >
                Authoring
              </Link>
            </li>
            <li className="nav-item fs-5">
              <Link
                to="/deployment"
                className={
                  isNavLinkActive("deployment")
                    ? "active nav-link"
                    : "nav-link"
                }
              >
                Deployment
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <div className="dropdown d-inline-block position-relative">
            <a
              className="btn btn-light bg-tertiary shadow-sm dropdown-toggle"
              href="#dropdown"
              data-bs-toggle="dropdown"
              data-bs-display="static"
            >
              Kedar.VijayKulkarni@geappliances.com
            </a>

            <div className="dropdown-menu dropdown-menu-end">
              <a
                className="dropdown-item"
                href="#dropdown-logout"
                onClick={handleClick}
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
