import React from 'react';
import BookItem from './BookItem';
import '../css-partials/BookShelf.scss';

function BookShelf(props) {
    const filteredBooks = props.books.filter((book) => book.shelf === props.curCat);
    return(
      <li>
        <div className="uk-grid uk-margin-remove bookshelf-cat">
          {
            filteredBooks.map((book, index) => (
              <BookItem 
                book={book} 
                key={`${props.curCat}_book${index}`} 
                curCat={props.curCat}
                catList={props.allCat} />))
          }
        </div>
      </li>
    )
}

export default BookShelf;