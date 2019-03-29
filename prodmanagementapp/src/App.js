import React, { Component } from 'react';
import ProdManageParent from './container/ProdManageParent';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* call the parent container */}
        <ProdManageParent />
      </div>
    );
  }
}

export default App;
