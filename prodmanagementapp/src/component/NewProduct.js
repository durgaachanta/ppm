import React from 'react';
import "../styles/component.css";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
// generic component for new product and to edit existing product information
class NewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      url: '',
      redirectPage: false,
    };

  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  formSubmit = (event) => {
    event.preventDefault();
    //axios call to server to store the new product info
    axios.post('/postproductdata', {
      name: this.state.title,
      price: this.state.price,
      url: this.state.url,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          //redirect to Product List page
          this.setState({ redirectPage: true });

        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  redirectPage = () => {
    if (this.state.redirectPage) {
      return <Redirect to="/products" />
    }
  }

  render() {

    return (
      <div className="bodyclass">
        {this.redirectPage()}
        <h1>Create a new Product</h1>
        <form onSubmit={this.formSubmit}>
          <div className="datacomponent">
            <label className="componentlabel" htmlFor="title">Title</label>
            <input className="inputcomponent" id="title" name="title" onChange={this.handleChange} value={this.state.title} />
          </div>
          <div className="datacomponent">
            <label className="componentlabel" htmlFor="price">Price</label>
            <input className="inputcomponent" id="price" name="price" onChange={this.handleChange} value={this.state.price} />
          </div>
          <div className="datacomponent">
            <label className="componentlabel" htmlFor="url">Image url</label>
            <input className="inputcomponent" id="url" name="url" onChange={this.handleChange} value={this.state.url} />
          </div>
          <button className="btn" type="submit">Create</button>
        </form>
      </div>
    );
  }

}
export default NewProduct;