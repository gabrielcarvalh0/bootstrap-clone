import "./App.css";
import { Header } from "./components/Header";
import { BsBookHalf, BsClipboard } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <Header />
      <main className=" ">
        <div className=" bd-masthead" id="content">
          <div className="container-xxl ">
            <div className="col-md-8 mx-auto text-center">
              <a
                className="d-flex flex-column flex-lg-row justify-content-center align-items-center mb-4 text-dark lh-sm text-decoration-none"
                href="https://blog.getbootstrap.com/2022/07/19/bootstrap-5-2-0/"
              >
                <strong className="d-sm-inline-block p-2 me-2 mb-2 mb-lg-0 rounded-3 masthead-notice">
                  New in v5.2
                </strong>
                <span className="text-muted">
                  CSS variables, responsive offcanvas, new utilities, and more!
                </span>
              </a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
                width="170"
                height="135"
                alt="Bootstrap"
                className="d-block mx-auto mb-3"
              />
              <h1 className="mb-3  fw-semibold">
                Build fast, responsive sites with&nbsp;Bootstrap
              </h1>
              <p className="lead mb-4 fw-normal">
                Powerful, extensible, and feature-packed frontend toolkit. Build
                and customize with Sass, utilize prebuilt grid system and
                components, and bring projects to life with powerful JavaScript
                plugins.
              </p>
              <div className="d-flex flex-column flex-lg-row align-items-md-stretch justify-content-md-center gap-3 mb-4">
                <div className="d-inline-block v-align-middle fs-5">
                  <div className="bd-code-snippet">
                    {" "}
                    <div className="bd-clipboard"> </div>
                    <div className="highlight">
                  
                      <pre className="chroma m-0">
                        <code className="language-sh" data-lang="sh">
                          <span className="line">
                            <span className="cl">npm i bootstrap@5.2.3</span>
                          </span>
                        </code>
                      </pre>
                      <div className="position-absolute end-0 me-4">
                      <BsClipboard   />                   </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <a
                    href="/docs/5.2/getting-started/introduction/"
                    className="bd-btn-lg btn btn-lg btn-primary d-flex align-items-center justify-content-center fw-semibold"
                  >
                    <BsBookHalf className="bi me-2" />
                    Read the docs
                  </a>
                </div>
              </div>
              <p className="text-muted mb-0">
                Currently <strong>v5.2.3</strong>
                <span className="px-1">·</span>
                <a
                  href="/docs/5.2/getting-started/download/"
                  className="link-secondary"
                >
                  Download
                </a>
                <span className="px-1">·</span>
                <a
                  href="https://getbootstrap.com/docs/4.6/getting-started/introduction/"
                  className="link-secondary text-nowrap"
                >
                  v4.6.x docs
                </a>
                <span className="px-1">·</span>
                <a
                  href="/docs/versions/"
                  className="link-secondary text-nowrap"
                >
                  All releases
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
