import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../assets/loading.gif";

const News = () => {
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("technology");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    const apiURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&apiKey=5e8603c7a4d9464a817e8d73e79ad3ce`;
    const response = await fetch(apiURL);
    const data = await response.json();
    setArticles(data.articles);
    setTotalArticles(data.totalResults);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchMoreData = async () => {
    if (articles.length <= totalArticles) {
      setPage(page + 1);
      const apiURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&apiKey=5e8603c7a4d9464a817e8d73e79ad3ce`;
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
      <p className="text-center newsPageHeading">Nexus News</p>
      <h5 className="text-center">Latest Headlines Of Specific categories</h5>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="d-flex align-items-center justify-content-center my-4">
            <img src={Loading} width="40px" alt="" />
          </div>
        }
        endMessage={<h5 className="text-center my-4">No more articles</h5>}
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
