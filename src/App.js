import React from 'react';
import logo from './header-logo.png';
import store from './store.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="top-box">
        <div className="top-box__content">
          <p className="top-box__text">
            <span className="arrow arrow-prev">
              <i className="fa fa-angle-left"></i>
            </span>
            <img className="store-icon" src={store}></img> Retire nas Lojas suas compras gratuitamente
            <span className="arrow arrow-next">
              <i className="fa fa-angle-right"></i>
            </span>
            </p>
          </div>
        </div>
        <div className="top-header">
          <div className="top-header__menu">
            <i className="fa fa-bars"></i>
          </div>
          <div className="top-header__logo">
            <a href="#">
             <img className="top-header__logo-img" src={logo}></img>
            </a>
          </div>
          <div className="top-header__shop-itens">
            <i className="fa fa-heart-o "></i>
            <span className="badge">6</span>
            <i className="fa fa-shopping-bag"></i>
            <span className ="badge">1</span>
          </div>
        </div>
        <div className="top-header__search">
          <div className="search">
          <form className="search__form">
            <input className="search__form-field" placeholder="Search Field" value=""></input>
            <button className="search__form-button" title="Search" type="submit">
              <i className="search__form-icon fa fa-search"></i>
            </button>  
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
