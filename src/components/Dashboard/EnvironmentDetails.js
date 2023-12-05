import React from "react";
import { GEAContext } from "../../context/context";
import { DateFormatter, SVGComponent } from "../../components";

const Deployment = (textColor) => {
  const { listEquipments } = React.useContext(GEAContext);

  const EmptyList = () => {
    return (
      <div className="col-12 col-sm-12 mb-2 d-flex">Environment not found!</div>
    );
  };

  return (
    <React.Fragment>
      <div className="container mx-auto p-1">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h6 className="card-subtitle text-primary fw-bold my-3 text-center">
                  Shows what is currently deployed on this environment.
                  <div class="badge bg-success float-end" title="Number of Equipments">{listEquipments.data.listEquipments.items.length}</div>
                </h6>
                <div className="row">
                  <div className="col-6">
                    <p className="fw-bold m-0">Last Deployed</p>
                    <p>at 19th Oct 2023 - 04:24 AM</p>
                  </div>
                  <div className="col-6">
                    <p className="fw-bold m-0">Last Deployed</p>
                    <p>at 19th Oct 2023 - 04:24 AM</p>
                  </div>
                </div>
              </div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="col-6">Name</th>
                    <th className="col-3">Customer Assist</th>
                    <th className="col-3">Agent Assist</th>
                  </tr>
                </thead>
                <tbody>
                  {listEquipments ? (
                    listEquipments.data.listEquipments.items?.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <p className={`mb-1 fw-bold ${textColor.textColor}`}>{item.displayName}</p>
                          <p className="text-muted mb-2 fs-small">
                            <div className="fw-bold"><SVGComponent.DecisionTree/> Decision tree</div>
                            <em>Note: short note...</em>
                          </p>
                          <p className="text-muted m-0 fs-small">
                            <div className="fw-bold"><SVGComponent.ModelList /> Module document</div>
                            <em>Note: short note...</em>
                          </p>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="checked"
                              checked
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              {DateFormatter(new Date(), "d MMM yyyy, h:mm a")}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="checked"
                              checked
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              {DateFormatter(new Date(), "d MMM yyyy, h:mm a")}
                            </label>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <EmptyList />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Deployment;
