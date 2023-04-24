import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "./styles/Main.scss"
import "./styles/Header.scss"
import "./styles/Footer.scss"
import "./styles/Sidebar.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)