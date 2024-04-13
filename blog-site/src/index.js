import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcH6hJw5w8L3kCmnLtKISssRxZOjcW0Wk",
  authDomain: "my-react-blog-7400b.firebaseapp.com",
  projectId: "my-react-blog-7400b",
  storageBucket: "my-react-blog-7400b.appspot.com",
  messagingSenderId: "549998357602",
  appId: "1:549998357602:web:27df7cd3d2fd628a64353b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

