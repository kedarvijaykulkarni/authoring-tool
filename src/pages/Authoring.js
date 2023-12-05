import React, { useRef, useState } from "react";
import {
  DocumentList,
  Navigation,
  Document,
} from "../components";
import {  useParams } from 'react-router-dom';


const EmptyDocument = () => {
  return (
    <div className="authoring-content full">
      <h2 className="mb-md-3 mb-4">Select a Document to proceed</h2>
      <ul>
        <li>Select a document from the list on the left to load it here.</li>
        <li>
          Once loaded, explore questions and solutions by hovering over and
          clicking the nodes of the tree
        </li>
        <li>Right-click a node for additional actions</li>
        <li>Once done editing, click on "Save Document" to save it</li>
      </ul>
    </div>
  );
};



const Authoring = () => {

  const { documentId } = useParams();

  console.log("documentId", documentId)

  return (
    <React.Fragment>
      <Navigation />
      <div className="wrapper">
        <section id="sidebar" className="sidebar">
          <DocumentList />
        </section>
        <section className="main">
          {!documentId 
            ? <EmptyDocument />
            : <Document />
          }
        </section>
      </div>
    </React.Fragment>
  );
};

export default Authoring;
