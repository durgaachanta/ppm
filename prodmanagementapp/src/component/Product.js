import React from 'react';
import axios from 'axios';
import "../styles/component.css";
import Display from './Display';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],

    }

  };


  fetchproducts = () => {
    axios.get('/fetchproducts')
      .then((response) => {
        //console.log(response);
        this.setState({ productData: response.data });

      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    // fetch data from Server 
    this.fetchproducts();
  }

  deleteitem = (id) => {
    //console.log(id);
    axios.post(`/deleteproduct/${id}`)
      .then((response) => {
        //console.log(response);
        if (response.data.status === "success") {
          this.fetchproducts();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="bodyclass" >
        <h1>Products List</h1>
        {this.state.productData
          ? (this.state.productData.map((item, index) => {
            return <Display data={item} deleteitem={this.deleteitem} />

          }))
          : null

        }
      </div >

    );

  }

}
export default Product;