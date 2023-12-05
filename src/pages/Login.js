import React from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/dashboard');
  }

  return (
    <React.Fragment>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card gradient-custom text-white"
                style={{ "border-radius": "1rem" }}
              >
                <div className="card-body p-5">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase text-center">
                      Login
                    </h2>
                    <p className="text-white-50 mb-3 text-center">
                      Log in to access the application
                    </p>
                    <p className="text-white-50 mb-5">
                      On clicking the Login button, you will be redirected to
                      your organization's authentication page. Once successfully
                      authenticated, you will be automatically forwarded to the
                      application launch page.
                    </p>
                    <form className="text-center">
                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        onClick={handleClick}
                      >
                        <i className="fas fa-shield-alt"></i> Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
