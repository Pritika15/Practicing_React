import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import Header from "./Header"
// import TextInfo from "./MainContent"
// import Footer from "./Footer"
// function Page()
// {
//    return(
//     <div>
//         <Header />  
//         <TextInfo />
//         <Footer />
        
        
//     </div>
//    )

// }

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
