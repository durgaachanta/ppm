import React from 'react';
import 'react-router';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import '../styles/prodmanageparent.css';
import Home from '../component/Home';
import Product from '../component/Product';
import NewProduct from '../component/NewProduct';
import Navigation from '../component/Navigation';
import EditProduct from '../component/EditProduct';



class ProdManageParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <BrowserRouter>
        <div id="prodmanage">
          {/* Routing and Nav bar  */}
          <h1>PPM - Project Product Management</h1>
          <Navigation />
          <Switch>
            <Redirect exact from='/' to='/home' />
            <Route path="/home" component={Home} />
            <Route path="/products/new" component={NewProduct} />
            <Route path="/products/edit/:id" component={EditProduct} />
            <Route path="/products" component={Product} />
          </Switch>
        </div>

      </BrowserRouter>
    );
  }

}
export default ProdManageParent;