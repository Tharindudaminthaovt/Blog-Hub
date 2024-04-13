
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';





function App() {
  return (

    <div className="App">
      <h1>My Awesome Blog</h1>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles" element={<ArticlesListPage />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/create-account' element={<CreateAccountPage/>}/>
          <Route path="*" element={<NotFoundPage />} />{/* '*' = display for all routes except the defined ones*/}
        </Routes>
      </Router>


    </div>

  );
}

export default App;

