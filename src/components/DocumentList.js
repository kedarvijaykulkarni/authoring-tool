import React from "react";
import DocumentCard from "./DocumentCard";
import { GEAContext } from "../context/context";
import { Link } from "react-router-dom";

const DocumentList = () => {
  const { listDocuments } = React.useContext(GEAContext);

  // const [selectedItem, setSelectedItem] = useState(null);

  // const handleItemClick = (item) => {
  //   setSelectedItem(item);
  // };

  const EmptyList = () => {
    return (
      <div className="col-12 col-sm-12 mb-2 d-flex">Documents not found!</div>
    );
  };

  return (
    <React.Fragment>
      <div className="sidebar-content">
        <div className="row">
          {listDocuments ? (
            listDocuments.data.listDocuments.items?.map((item) => (
              <Link to={`/authoring/${item.id}`} key={item.id} className="text-decoration-none display-block">
                <div className="col-12 col-sm-12 mb-2 d-flex">
                  <DocumentCard {...item} />
                </div>
              </Link>
            ))
          ) : (
            <EmptyList />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default DocumentList;
