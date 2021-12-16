import React from "react";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../../actions/authAction";

import "../admin-home/adminhome.styles.css";

const AdminNavbar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#337ab7" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/home" style={{ color: "white" }}>
            Admin-Chatbot
          </a>

          <form class="d-flex">
            <button
              class="btn btn-secondary"
              type="submit"
              onClick={() => dispatch(logoutAdmin())}
            >
              Logout
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
export default AdminNavbar;
