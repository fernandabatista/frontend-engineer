import React, { Component } from 'react';
import logo from './header-logo.png';
import store from './store.png'
import './App.css';
import PropTypes from 'prop-types';
var results = [];

const proxyurl = "https://cors-anywhere.herokuapp.com/";

class Autocomplete extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

    static propTypes = {
        options: PropTypes.instanceOf(Array).isRequired
    };
    state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: ''
    };

    
    itemSearch = (item) => {
        
        let url = 'http://agenciabluefoot.vtexcommercestable.com.br/buscaautocomplete/?productNameContains='+item+''; // site that doesn’t send Access-Control-*
        
          fetch(proxyurl + url)
          .then(response => 
            response.json()).then((items) => {
                results = items.itemsReturned;
                console.log(results);
                this.setState({
                    items: items
                  });
                  
              },
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
            return results;
        }

    onChange = (e) => {
    console.log('onChanges');
    
    const userInput = e.currentTarget.value; //valor entrado
    const options = this.itemSearch(userInput); //sugestoes
    console.log(results);

    const filteredOptions = options; //opcoes  filtradas

    this.setState({
        activeOption: 0,
        filteredOptions,
        showOptions: true,
        userInput: e.currentTarget.value
    }); //seleciona a primera por default
    };
  
  render() {
    const { error, isLoaded, items } = this.state;
    const {
        onChange,  
        state: { filteredOptions, showOptions, userInput }
      } = this;
      let optionList;

    return (
      <React.Fragment>
        <div className="App">
      <header className="App-header">
      <div className="top-box">
        <div className="top-box__content">
          <p className="top-box__text">
            <span className="arrow arrow-prev">
              <i className="fa fa-angle-left"></i>
            </span>
            <spam className="text-1"><img className="store-icon" src={store}></img> Retire na loja suas compras gratuitamente</spam>
            <spam className="text-2"><img className="store-icon" src={store}></img> Em até 6x sem juros no cartão de crédito</spam>
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
          <div className="top-header__search-desktop">
          <div className="search">
          <form className="search__form">
            <input className="search__form-field" type="text" placeholder="Search Field" 
            onChange={onChange}></input>
            <button className="search__form-button" title="Search" type="submit">
              <i className="search__form-icon fa fa-search"></i>
            </button>  
            </form>
            <div className="search-results">
            
          {results.map(item => (
            <div className="search-result__item" key={item.productId}>
                <a className="search-result__info" target="_blank" href={item.href}>
                    <img src={item.thumbUrl}></img>  
                {item.name}
                <p className="search-result__see-more">VER MAIS <i className="fa fa-angle-right"></i></p>
                </a> 
              
            </div>
          ))}
        
      </div>
          </div>
        </div>
          <div className="top-header__shop-itens">
            <i className="fa fa-heart-o "></i>
            <span className="badge">6</span>
            <i className="fa fa-shopping-bag"></i>
            <span className ="badge">1</span>
          </div>
        </div>
        <div className="top-header__nav">
            <a className="top-header__nav-item" href="#">CATEGORIA</a>
            <a className="top-header__nav-item" href="#">CATEGORIA</a>
            <a className="top-header__nav-item" href="#">CATEGORIA</a>
            <a className="top-header__nav-item" href="#">CATEGORIA</a>
            <a className="top-header__nav-item" href="#">CATEGORIA</a>
            <a className="top-header__nav-item" href="#">CATEGORIA</a>
            <a className="top-header__nav-item" href="#">CATEGORIA</a>
        </div>
        <div className="division"></div>
        <div className="top-header__search-mobile">
          <div className="search">
          <form className="search__form">
            <input className="search__form-field" type="text" placeholder="Search Field" 
            onChange={onChange}></input>
            <button className="search__form-button" title="Search" type="submit">
              <i className="search__form-icon fa fa-search"></i>
            </button>  
            </form>
            <div className="search-results">
            
          {results.map(item => (
            <div className="search-result__item" key={item.productId}>
                <a className="search-result__info" target="_blank" href={item.href}>
                    <img src={item.thumbUrl}></img>  
                {item.name}
                <p className="search-result__see-more">VER MAIS <i className="fa fa-angle-right"></i></p>
                </a> 
              
            </div>
          ))}
        
      </div>
          </div>
        </div>
      </header>
    </div>
      </React.Fragment>
    );
  }
}
export default Autocomplete;