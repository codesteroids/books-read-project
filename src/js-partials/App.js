import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import BookShelves from './BookShelves';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';


function App() {
  UIkit.use(Icons);
  return (
    <BrowserRouter>
      <div className="App">
          <Route exact path ="/" component={BookShelves} />
      </div>
    </BrowserRouter>
  );
}

export default App;
