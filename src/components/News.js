import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../assets/loading.gif";

const News = (props) => {
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("technology");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    props.updateProgress(30);
    const apiURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&apiKey=${props.apiKey}`;
    const response = await fetch(apiURL);
    props.updateProgress(50);
    const data = await response.json();
    props.updateProgress(80);
    setArticles(data.articles);
    setTotalArticles(data.totalResults);
    props.updateProgress(100);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateCategory = (category) => {
    setCategory(category);
    fetchData();
  };

  const fetchMoreData = async () => {
    if (articles.length !== totalArticles) {
      const apiURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${
        page + 1
      }&apiKey=${props.apiKey}`;
      setPage(page + 1);
      const response = await fetch(apiURL);
      const data = await response.json();
      setArticles(articles.concat(data.articles));
      setTotalArticles(data.totalResults);
    } else {
      setHasMore(false);
    }
  };

  return (
    <div className="container">
      <div className="d-flex">
        <div className="dropdown ms-4">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Caterogies
          </button>
          <ul className="dropdown-menu">
            <li
              onClick={() => {
                updateCategory("business");
              }}
            >
              <a className="dropdown-item" href="#">
                Business
              </a>
            </li>
            <li
              onClick={() => {
                updateCategory("entertainment");
              }}
            >
              <a className="dropdown-item" href="#">
                Entertainment
              </a>
            </li>
            <li
              onClick={() => {
                updateCategory("general");
              }}
            >
              <a className="dropdown-item" href="#">
                General
              </a>
            </li>
            <li
              onClick={() => {
                updateCategory("health");
              }}
            >
              <a className="dropdown-item" href="#">
                Health
              </a>
            </li>
            <li
              onClick={() => {
                updateCategory("science");
              }}
            >
              <a className="dropdown-item" href="#">
                Science
              </a>
            </li>
            <li
              onClick={() => {
                updateCategory("sports");
              }}
            >
              <a className="dropdown-item" href="#">
                Sports
              </a>
            </li>
            <li
              onClick={() => {
                updateCategory("technology");
              }}
            >
              <a className="dropdown-item" href="#">
                Technology
              </a>
            </li>
          </ul>
        </div>
        <div className="w-80">
          <p className="text-center newsPageHeading">Nexus News</p>
          <h5 className="text-center mb-4">
            Latest Headlines On {capitalizeFirstLetter(category)}
          </h5>
        </div>
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="d-flex align-items-center justify-content-center my-4">
            <img src={Loading} width="40px" alt="" />
          </div>
        }
        endMessage={
          <h5 className="text-center my-4">
            You have reached the end of the page
          </h5>
        }
      >
        <div className="row d-flex align-items-start">
          {articles.map((article, i) => {
            return (
              <div
                className="col d-flex justify-content-center align-items-center"
                key={i}
              >
                <NewsItem
                  name={article.source.name}
                  author={article.author}
                  title={article.title}
                  description={article.description}
                  URL={article.url}
                  URLToImage={article.urlToImage}
                  publishedAt={article.publishedAt}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
