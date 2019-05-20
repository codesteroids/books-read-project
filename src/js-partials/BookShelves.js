import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookStand from '../images/BookStand.svg';
import BookShelf from './BookShelf';
import {BrowserRouter, Route, Link}  from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import * as Utils from './Utils';

//PARTIAL FOR THE BOOKSHELVES HEADER
const Header = () => {
  return (
    <div className="uk-container">
      <div className="uk-grid uk-text-center">
        <div className="uk-width-auto@m">
          <img src={BookStand}  title="My Books App" width="120" alt="My Books App" />
        </div>
        <div className="uk-width-expand@m">
          <h2 className="uk-heading-small uk-text-primary">My Read Books App</h2>
          <p className="uk-text-lead uk-margin-medium-left">All the books I like in one place</p>
        </div>
      </div>
      
    </div>
  )
}

class BookShelves extends Component {
  state = {
    books: [],
    categories: []
  }

  updateState(categories, books) {
    this.setState(() => ({
      books,
      categories
    }))
    console.log(this.state);
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((data) => {
      let categories = [];
      data.forEach((item) => {
        if(categories.indexOf(item.shelf) === -1) {
         categories.push(item.shelf);
        } 
      });
      this.updateState(categories, data);
    }) 
  }

  render() {
    const {categories, books} = this.state; 
    return(
      <div className="wrapper">
        <div className="uk-section uk-padding-small">
          <Header />
        </div>
        <div className="uk-section">
          <div className="uk-container">
              <ul className="uk-tab" uk-switcher={`connect: .shelves;animation: uk-animation-fade`}>
                {
                  categories.map((cat,index) => (
                    <li key={`tab_${index}`}>
                      <a 
                        href={`#${cat}`} 
                        title={cat}>{Utils.formatCategory(cat).toUpperCase()}
                      </a>
                    </li>))
                }
              </ul>
              <ul className="uk-switcher uk-margin shelves">
                {
                  categories.map((cat, index) => (
                    <BookShelf 
                      key={index} 
                      allCat={categories}
                      curCat={cat} 
                      books={books}/>))
                }
                
              </ul> 
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelves;