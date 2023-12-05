import React from "react";
import { Navigation } from "../components";
import { GEAContext } from "../context/context";

const Deployment = () => {
  const { listEquipments } = React.useContext(GEAContext);
  return (
    <React.Fragment>
      <Navigation />
      <div className="wrapper">
        <div className="container mx-auto mx-5 p-5">
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Select Equipment</h5>
                  <h6 className="card-subtitle text-muted">
                    Choose which equipment to deploy.
                  </h6>
                </div>
                <div className="card-body">
                  <div id="tasks-upcoming">
                    {listEquipments ? (
                      listEquipments.data.listEquipments.items?.map(
                        (item) => (
                          <div className="card mb-1 bg-light cursor-grab border">
                            <div className="card-body p-3">
                              <div className="float-end mr-n2">
                                <label className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    aria-label="completed"
                                    checked=""
                                  />
                                </label>
                              </div>
                              <div>
                                {item.displayName}
                              </div>
                            </div>
                          </div>
                        )
                      )
                    ) : (
                      <div>Empty equipment</div>
                    )}
                  </div>

                  
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Dishwashers</h5>
                  <h6 className="card-subtitle text-muted">
                    Select the type of document. Then, select the document and
                    version you want to Add to the Deployment Package.
                  </h6>
                </div>
                <div className="card-body">
                  <div id="tasks-progress">
                    <div className="card mb-1 bg-light cursor-grab border">
                      <div className="card-body p-3">
                        <div className="float-end mr-n2">
                          <label className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              aria-label="completed"
                            />
                          </label>
                        </div>
                        <div>
                          Decision Tree (required)
                        </div>
                      </div>
                    </div>
                    <div className="card mb-1 bg-light cursor-grab border">
                      <div className="card-body p-3">
                        <div className="float-end mr-n2">
                          <label className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              aria-label="completed"
                            />
                          </label>
                        </div>
                        <div>
                          Models List (required)
                        </div>
                      </div>
                    </div>
                    
                  </div>

                  
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Deployment Summary</h5>
                  <h6 className="card-subtitle text-muted">
                    Shows what a currently deployed vs what you are about to
                    deploy.
                  </h6>
                </div>
                <div className="card-body">
                  <div id="tasks-completed">
                    <div className="card mb-3 bg-light cursor-grab border">
                      <div className="card-body p-3">
                        <p>
                          Nam pretium turpis et arcu. Duis arcu tortor, suscipit
                          eget, imperdiet nec, imperdiet iaculis, ipsum.
                        </p>
                        <a className="btn btn-outline-primary btn-sm" href="/#">
                          No Change
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="d-grid">
                    <a href="/#" className="btn btn-primary">
                      Start Deployment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Deployment;
