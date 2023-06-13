import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = () => {
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("technology");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    const apiURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&apiKey=5e8603c7a4d9464a817e8d73e79ad3ce`;
    const response = await fetch(apiURL);
    const data = await response.json();
    setArticles(data.articles);
  };
  useEffect(() => {
    fetchData();
  });

  return (
    <div className="container">
      <p className="text-center newsPageHeading">Nexus News</p>
      <p className="text-center newsPageSubHeading">
        Latest Headlines Of Specific categories
      </p>
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
    </div>
  );
};

export default News;
