import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../styles/footer.style.module.css";

export default function ExpItem(props) {
  const deleteExp = async (userID) => {
    const andisToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMGM5YzZmZDIyODAwMTUzZmRiYWMiLCJpYXQiOjE2MTc2OTM4NTIsImV4cCI6MTYxODkwMzQ1Mn0.b_4i8l9HxOmAylxIxWyK1cX9Brjnydu_my16UsNd4PE";
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${props.exp._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + andisToken,
          },
        }
      );
      if (resp.ok) {
        alert(`Experience Delete`);
      } else {
      }
    } catch (error) {
      console.log(error);
      alert(`There's an error. Check your console.`);
    }
  };
  return (
    <div>
      <Row>
        <Col xs={3}>
          <img
            style={{ height: "50px", width: "50px" }}
            className="rounded"
            src={props.exp.image}
            alt="Logo employer"
          />
        </Col>
        <Col xs={7}>
          <strong>{props.exp.company}</strong> <br />
          {props.exp.role}
        </Col>
        <Col
          xs={2}
          style={{ float: "right" }}
          className="d-flex align-items-center flex-row-reverse justify-content-between "
        >
          <svg
            className="ml-5 "
            onClick={() => props.setModalShow(true, props.exp._id)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
            style={{ cursor: "pointer" }}
          >
            <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
          </svg>
          <svg
            className={styles.yok}
            style={{ height: "20px", width: "20px" }}
            onClick={() => {
              deleteExp(props.userID);
              props.getMyExp();
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </Col>
      </Row>
    </div>
  );
}
