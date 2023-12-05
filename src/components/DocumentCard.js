import React from "react";
import { SVGComponent, DateFormatter } from "./";
const DocumentCard = (item) => {
  // console.log("Item, ", item);

  const isProd = item?.environment?.id ? true : false;
  const isProdClassName = isProd
    ? "stat text-bg-primary svg-white"
    : "stat text-bg-warning";
  const isProdClassNameBadge = isProd
    ? "badge text-bg-primary svg-white me-2"
    : "badge text-bg-warning me-2";

  return (
    <React.Fragment>
      <div
        className={
          item.locked
            ? "card flex-fill card-document locked"
            : "card flex-fill card-document"
        }
      >
        <div className="card-header p-2">
          <div className="d-flex align-items-start">
            <div className="d-inline-block me-2">
              <div className={isProdClassName}>
                <h5
                  title={
                    item.documentTypeId === "doctype_CASE_TREE"
                      ? "Decision Tree"
                      : "Models List"
                  }
                >
                  {item.locked ? (
                    <SVGComponent.Lock />
                  ) : item.documentTypeId === "doctype_CASE_TREE" ? (
                    <SVGComponent.DecisionTree />
                  ) : (
                    <SVGComponent.ModelList />
                  )}
                </h5>
              </div>
            </div>
            <div className="flex-grow-1">
              <div
                className="card-title text-uppercase text-truncate"
                title={item.displayName}
                style={{ maxWidth: "240px" }}
              >
                {item.displayName}
              </div>

              <p className="mb-0 text-muted fw-lighter fs-small card-subtitle">
                Created on: {DateFormatter(new Date(item.createdAt), "d MMM yyyy, h:mm a")}
              </p>
            </div>
          </div>
        </div>
        <div className="card-body p-2">
          <div className="mb-0 card-text">
            {item.locked ? (
              <p className="fs-smaller m-1">
                <SVGComponent.Lock /> by {item.lockedBy}
              </p>
            ) : (
              ""
            )}

            <p className="fs-smaller">{item.notes ? item.notes : "-"}</p>

            <div className="text-right">
              <span className={isProdClassNameBadge}>
                {item.equipment.displayName}
              </span>

              <span className={isProdClassNameBadge}>
                {isProd ? "Production" : "Staging"}
              </span>

              {item.locked ? (
                item.documentTypeId === "doctype_CASE_TREE" ? (
                  <span className={isProdClassNameBadge}>
                    <SVGComponent.DecisionTree />
                  </span>
                ) : (
                  <span className={isProdClassNameBadge}>
                    <SVGComponent.ModelList />
                  </span>
                )
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          <p className="fs-small card-subtitle">
            Last modified on: {DateFormatter(new Date(item.createdAt), "d MMM yyyy, h:mm a")}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DocumentCard;
