import React, { useEffect, useState } from "react";
import { EnvironmentCard, Navigation, EnvironmentDetails } from "../components";
import { GEAContext } from "../context/context";
import { useParams } from "react-router-dom";

const Deployment = () => {
  const { listEnvironments } = React.useContext(GEAContext);

  const [header, setHeader] = useState(0);

  const { environment } = useParams();

  console.log("environment", environment);

  const EmptyList = () => {
    return (
      <div className="col-12 col-sm-12 mb-2 d-flex">Environment not found!</div>
    );
  };

  const headerClass = () => {
    return environment && environment.includes("env_production")
      ? "text-primary"
      : "text-warning";
  };

  useEffect(() => {
    // Do something with the id param
    if (environment)
      setHeader(
        environment.includes("env_production") ? "Production" : "Staging"
      );
    else setHeader("");
  }, [environment]);

  return (
    <React.Fragment>
      <Navigation />
      <div className="wrapper">
        <div className="container mx-auto mx-5 p-5">
          {header ? (
            <React.Fragment>
              <h2 className={`text-center fw-bold ${headerClass()}`}>{header}</h2>
              <p className="text-center">See details of this environment - what documents are deployed for which application, etc.</p>
            </React.Fragment>
          ) : (
            ""
          )}

          {environment ? (
            <EnvironmentDetails textColor={headerClass()} />
          ) : (
            <React.Fragment>
              <div className="row">
                <div className="col-12 mb-3 text-center">
                  Check the status and some basic details of all environments at
                  a glance.
                </div>
              </div>
              <div className="row">
                {listEnvironments ? (
                  listEnvironments.data.listEnvironments.items?.map((item) => (
                    <div className="col-lg-6 col-6 col-sm-12 mb-2 d-flex">
                      <EnvironmentCard key={item.id} {...item} />
                    </div>
                  ))
                ) : (
                  <EmptyList />
                )}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Deployment;
