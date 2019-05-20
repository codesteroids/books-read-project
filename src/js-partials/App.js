import React from 'react';
import BookShelves from './BookShelves';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

function App() {
  UIkit.use(Icons);
  return (
    <div className="App">
      <BookShelves />
    </div>
  );
}

export default App;
