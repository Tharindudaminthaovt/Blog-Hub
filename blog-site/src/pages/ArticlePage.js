import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';
import axios from 'axios';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
import useUser from '../hooks/useUser';

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [],canUpvote:false });
  const {canUpvote}=articleInfo;
  const { articleId } = useParams();

  const { user, isLoading } = useUser();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && await user.getIdToken();
      const headers = token ? { authtoken: token } : {};
      const response = await axios.get(`/api/articles/${articleId}`, { headers });
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    }
if(isLoading){

  loadArticleInfo();
}
  }, [isLoading,user]);//execuite only when 1st mounted to DOM

  const article = articles.find(article => article.name === articleId);

  const addUpvote = async () => {
    const token = user && await user.getIdToken();
    const headers = token ? { authtoken: token } : {};
    const response = await axios.put(`/api/articles/${articleId}/upvote`,null,{headers});
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  }


  if (!article) {
    return <NotFoundPage />
    {/*As nothing will execuite after returning something else is not required */ }
  }

  return (
    <>
      <h1>{article.title}</h1>
      <div className='upvotes-section'>
        {user ?

          <button onClick={addUpvote}>{canUpvote ? 'Upvote':'Already Upvoted '}Upvote</button> :
          <button>Log in to upvote</button>

        }
        <p>This article has {articleInfo.upvotes} upvotes(s)</p>
      </div>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {user ? <AddCommentForm
        articleName={articleId}
        onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} /> :
        <button>Log in to add a comment</button>
      }
      <CommentsList comments={articleInfo.comments} />
    </>

  );
}

export default ArticlePage;