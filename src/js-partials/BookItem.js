import React, {Component} from 'react';
import * as Utils from './Utils';

class BookItem extends Component {
  render() {
    return (
      <div className="uk-width-1-4@m uk-width-1-5@l uk-width-1-2">
        <div className="uk-card uk-card-default uk-card-hover book-item uk-margin-small-bottom">
          <div className="uk-card-media-top book-item__image">
            <img src={this.props.book.imageLinks.thumbnail} alt={this.props.book.title}/>
          </div>
          <div className="uk-card-body book-item__description">
            <h5 className="uk-margin-small-bottom">{this.props.book.title}</h5>
            <p className="uk-text-small uk-margin-small"><b>Authors: </b> <br></br>{this.props.book.authors.join(', ')}</p>
          </div>
          <div className="uk-card-footer book-item__actions uk-flex-middle uk-flex-1">
            <div className="uk-button-group uk-width-1-1">
            <button className="uk-button uk-button-default uk-button-small bt-details" type="button">Details</button>
            <div className="uk-inline bt-actions">
              <button className="uk-button uk-button-secondary uk-button-small " type="button"><span uk-icon="icon: more-vertical"></span></button>
              <div 
                uk-dropdown="pos: bottom-justify; mode: click; animation: uk-animation-slide-bottom-small; duration: 300"
              >
                  <ul className="uk-nav uk-dropdown-nav">
                      <li class="uk-nav-header uk-text-secondary">CATEGORIES</li>
                      <li class="uk-nav-divider"></li>
                      {this.props.catList.map((cat) => {
                        if(cat === this.props.curCat) {
                          return (<li className="uk-active uk-text-primary uk-text-capitalize">
                            <span className="uk-margin-small-right" uk-icon="icon: check"></span>{Utils.formatCategory(cat)}
                            </li>)
                        }
                        return (<li className="uk-text-capitalize"><a href="#" data-category={cat}>{Utils.formatCategory(cat)}</a></li>)
                      })}
                  </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default BookItem;