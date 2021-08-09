import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

/**
 * Listener to show current navigation window/menu.
 */
window.addEventListener('scroll', () => {
  // let navigationLinks = document.querySelectorAll('nav div a');
  // let fromTop = window.scrollY;
  // let fromTop = window.scrollY + 60 + window.innerHeight * 0.05;
  let navBar = document.querySelector('nav');
  let aLinks = document.querySelectorAll('nav div a');
  let logo = document.getElementsByClassName("logo");
  let resizeLogo = document.getElementsByClassName("resize-logo");

  // Header transits to the next state when scrollY > 0 (upon scrolling from the top)
  navBar.classList.toggle('sticky', window.scrollY > 0);
  aLinks.forEach((link) => {
    link.classList.toggle('sticky', window.scrollY > 0);
  });
  logo.item(0).classList.toggle('sticky', window.scrollY > 0);
  resizeLogo.item(0).classList.toggle('sticky', window.scrollY > 0);

  // navigationLinks.forEach((link) => {
  //   let section = document.querySelector(link.hash);
  //
  //   if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
  //     link.classList.add('active');
  //   } else {
  //     link.classList.remove('active');
  //   }
  // });
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
