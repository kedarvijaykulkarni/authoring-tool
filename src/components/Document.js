import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {SVGComponent} from "./"

const Document = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState("");

  const handleEditorChange = (content, editor) => {
    setContent(content);
  };

  return (
    <React.Fragment>
      <header className="authoring-header container-fluid">
        <div className="row mt-3 mb-xl-3">
          <div className="col-auto d-none d-sm-block">
            <h3>
              <spam className="me-1">
                <SVGComponent.ModelList />{" "}
              </spam>
              Default model list for mwo
            </h3>
          </div>

          <div className="col-auto ms-auto text-end mt-n1">
            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <button
                data-mdb-ripple-init=""
                className="btn btn-outline-dark"
                type="button"
                data-mdb-ripple-color="dark"
              >
                Search
              </button>

              <button className="btn btn-outline-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-filter align-middle"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>{" "}
                Replace
              </button>
              <button className="btn btn-outline-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-filter align-middle"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>{" "}
                Save document
              </button>
              <button className="btn btn-outline-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-refresh-cw align-middle"
                >
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <polyline points="1 20 1 14 7 14"></polyline>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                </svg>{" "}
                Close
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="authoring-content">
        <section className="document-content">graph</section>
        <section className="document-property">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h5 className="mt-2 mb-3">Solution</h5>
                <Editor
                  apiKey='brr722gqvj46wwan3iedqz5uld9mto1pw44uc8myw9tmsqfx' 
                  ref={editorRef}
                  init={{
                    width: 350,
                    height: 150,
                    menubar: false,
                  }}
                  initialValue="<p>This is the initial content.</p>"
                  onChange={handleEditorChange}
                  toolbar="undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="mt-3 mb-1 fw-bold">Hint</div>
                <Editor
                  apiKey='brr722gqvj46wwan3iedqz5uld9mto1pw44uc8myw9tmsqfx' 
                  ref={editorRef}
                  init={{
                    width: 350,
                    height: 150,
                    menubar: false,
                  }}
                  initialValue="<p>This is the initial content.</p>"
                  onChange={handleEditorChange}
                  toolbar="undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="mt-3 mb-1 fw-bold">Tags</div>

                <div className="mb-3">
                  <label className="mb-1">
                    <span className="badge text-bg-warning">Tag</span>{" "}
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="tagControl"
                    placeholder="enter tag and hit enter"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="mt-3 mb-1 fw-bold">Attachments</div>

                <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="fileControl"
                    placeholder="Add new attachments"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-3 text-end">
                <button className="btn btn-muted">Reset</button>
                <button className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Document;