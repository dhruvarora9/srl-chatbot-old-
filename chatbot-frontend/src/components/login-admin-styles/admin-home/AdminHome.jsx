import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";
import Pagination from "react-js-pagination";

import "../admin-home/adminhome.styles.css";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminHome = (props) => {
  const { editModal, setEditModal } = props;
  console.log("editModal home", editModal);
  const dispatch = useDispatch();
  const unansweredData = [
    {
      id: 1,
      text: "Hello",
    },
    {
      id: 2,
      text: "Hello",
    },
    {
      id: 3,
      text: "Hello",
    },
  ];
  console.log("unansweredData in adminhome", unansweredData);

  const [itemsCountPerPage, setItemsCountPerPage] = useState(5);
  const [activePage, setActivePage] = useState(1);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(5);
  const [totalData, setTotalData] = useState(0);
  const lastData = activePage * itemsCountPerPage;
  const firstData = lastData - itemsCountPerPage;

  const handleDelete = () => {
    toast.success("question has been deleted");
  };

  useEffect(() => {
    setTotalData(unansweredData.length);
    console.log("activepage", activePage);
  }, [activePage]);

  return (
    <div className="main-container">
      <AdminNavbar />
      <div className="box-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Questiens</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {unansweredData &&
              unansweredData.length > 0 &&
              unansweredData.slice(firstData, lastData).map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.text}</td>
                    <td>
                      <button
                        class="btn btn-outline-secondary"
                        onClick={() => setEditModal(true)}
                      >
                        <Link to={`/adminResponse/${data.id}`}> response </Link>{" "}
                      </button>
                    </td>
                    <td>
                      <button
                        class="btn btn-outline-secondary"
                        onClick={handleDelete}
                      >
                        {" "}
                        delete{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
      {console.log("editModal after click", editModal)}
      {totalData > itemsCountPerPage ? (
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalData}
          pageRangeDisplayed={pageRangeDisplayed}
          onChange={(currentPage) => setActivePage(currentPage)}
        />
      ) : (
        " "
      )}
    </div>
  );
  return <div></div>;
};
export default AdminHome;

/**
 * itemClass="page-item" linkClass="page-link"
 */
