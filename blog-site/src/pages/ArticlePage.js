import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
const [articleInfo,setArticleInfo]=useState({upvotes:0,comments:[]});

useEffect(()=>{
  setArticleInfo({upvotes:3,comments:[]});
});

  const { articleId } = useParams();
  const article = articles.find(article => article.name === articleId);
  
  if(!article){
    return <NotFoundPage/> 
     {/*As nothing will execuite after returning something else is not required */}
  }
  
  return (
    <>
      <h1>{article.title}</h1>
      <p>This article has {articleInfo.upvotes} upvotes(s)</p>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>

  );
}

export default ArticlePage;