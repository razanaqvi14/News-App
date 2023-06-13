import React from "react";

const NewsItem = (props) => {
  return (
    <div className="card my-3" style={{ width: "18rem" }}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {props.name}
      </span>
      <img src={props.URLToImage} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{props.title}</h5>
        <p className="fw-light">{Date(props.publishedAt)}</p>
        <p className="card-text">{props.description}</p>
        <p className="card-text">
          <small className="text-body-secondary">
            Author: {props.author ? props.author : "Anonymous"}
          </small>
        </p>
        <a
          href={props.URL}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Click To Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
