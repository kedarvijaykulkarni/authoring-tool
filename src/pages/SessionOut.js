import React from "react";
import { useNavigate } from 'react-router-dom';

const SessionOut = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/login');
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
                    <h2 className="text-danger text-center">Access Denied!</h2>

                    <form>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <p className="mx-3 mb-0">
                          <i className="fas fa-exclamation-triangle fs-1 text-danger"></i>
                        </p>
                        <p className="mb-0">
                          You do not seem to have access to this page. Press the
                          button below to try and login again or Contact the
                          administrator.
                        </p>
                      </div>

                      <div className="d-flex flex-row align-items-center justify-content-center">
                        <button
                          type="button"
                          className="btn btn-outline-light btn-floating mx-1"
                          onClick={handleClick}
                        >
                          Sign in Again
                        </button>
                      </div>
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

export default SessionOut;
