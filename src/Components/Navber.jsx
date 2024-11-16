import React from "react";

function Navber(props) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary shadow-sm"
      data-bs-theme={props.mode}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          TO DO APP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="form-check form-switch" style={{width: '13rem'}}>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={props.toggleMode}
        />
        <label
          className="form-check-label "
          htmlFor="flexSwitchCheckDefault"
        >
          {props.mode === 'light' ? 'Enable dark mode' : 'Enable light mode'  }
        </label>
      </div>
    </nav>
  );
}

export default Navber;
