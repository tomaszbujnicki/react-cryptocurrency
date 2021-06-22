import React from 'react';
import './Article.scss';

const Article = (props) => {
  const title = props.title;
  const content = props.content;

  return (
    <article className="Article">
      <h2 className="Article__title">{title}</h2>
      <p className="Article__content">{content}</p>
    </article>
  );
};

export default Article;
