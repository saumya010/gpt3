import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="jsm__blog-article">
      <div className="jsm__blog-article-image">
        <img src={imgUrl} alt="Blog" />
      </div>
      <div className="jsm__blog-article-content">
        <div>
          <p>{date}</p>
          <h2>{title}</h2>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
