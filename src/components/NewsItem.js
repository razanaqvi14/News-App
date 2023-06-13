import React from "react";

const NewsItem = (props) => {
  return (
    <div className="card my-3" style={{ width: "18rem" }}>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {props.name}
      </span>
      <img src={props.URLToImage} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column align-items-center justify-content-center">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
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
