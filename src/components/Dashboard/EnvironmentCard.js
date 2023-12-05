import React from "react";
import { useNavigate } from 'react-router-dom';

const EnvironmentCard = (item) => {
  const navigate = useNavigate();

  function handleClick(param) {
    navigate(`/dashboard/${param}`);
  }
  
  return (
    <React.Fragment>
      <div className="card flex-fill card-document">
        <div className="card-header p-2">
          <div className="d-flex align-items-start">
            
            <h2 className="flex-grow-1">{item.displayName}</h2>
            <div className="d-inline-block me-2">
              <div className="badge text-bg-success text-light me-2">
                Complete
              </div>
            </div>
          </div>
        </div>
        <div className="card-body p-2">
          <div className="mb-0 card-text">
            <p className="fw-bold mb-0">Last Deployed</p>
            <p className="fs-smaller">at 19th Oct 2023 - 04:24 AM</p>

            <p className="fw-bold mb-0">Deployment Notes</p>
            <p className="fs-smaller">
              Update of Electric Ranges and Refrigerators{" "}
            </p>
          </div>
        </div>
        <div className="card-footer text-body-secondary  text-end">
          <button className="btn btn-primary" onClick={() => handleClick(item.id)}>Details</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EnvironmentCard;
