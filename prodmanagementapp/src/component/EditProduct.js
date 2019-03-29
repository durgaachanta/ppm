import React from 'react';
import "../styles/component.css";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
// generic component for new product and to edit existing product information
class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      url: '',
      pageRedirect: false,
    };

  };
  componentDidMount() {
    console.log("componentdid mount");
    axios.get(`/fetchproducts/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({ title: response.data.name, price: response.data.price, url: response.data.url });
      })
      .catch((error) => {
        console.log(error);
      })

  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  updateProduct = () => {
    axios.put(`/updateproduct/${this.props.match.params.id}`, {
      name: this.state.title,
      price: this.state.price,
      url: this.state.url,
    })
      .then((response) => {
        //console.log(response);
        if (response.data.status === "success") {
          this.setState({ pageRedirect: true });
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProduct = () => {
    //delete this product
    axios.post(`/deleteproduct/${this.props.match.params.id}`)
      .then((response) => {
        //console.log(response);
        if (response.data.status === "success") {
          this.setState({ pageRedirect: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  formSubmit = (e) => {
    e.preventDefault();
  }

  // page redirect
  redirectPage = () => {
    if (this.state.pageRedirect) {
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
          <button className="btn" type="submit" onClick={this.deleteProduct}>Delete</button>
          <button className="btn" type="submit" onClick={this.updateProduct}>Update</button>
        </form>
      </div>
    );
  }

}
export default EditProduct;