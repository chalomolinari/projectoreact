import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { initializeApp } from "firebase/app";




const firebaseConfig = {
  apiKey: "AIzaSyCRmArXW7-1El7VnGO3aNK7M0sMs7ZWj9s",
  authDomain: "coderhousereact-molinari.firebaseapp.com",
  projectId: "coderhousereact-molinari",
  storageBucket: "coderhousereact-molinari.appspot.com",
  messagingSenderId: "8439780962",
  appId: "1:8439780962:web:0f682a75d5ce668e0fe33b"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


