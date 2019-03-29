// creates a server
const express = require('express');
const app = express();
const axios = require('axios');

// handles post requests
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//serves the application from the build folder
app.use(express.static(__dirname + '../../prodManagementApp/build/'));

//fetch data 
app.get('/fetchproducts', (req, res) => {
  //axios call to fetch data from MockAPI
  axios.get('http://5c983a812e1ca60014d60d43.mockapi.io/product')
    .then((response) => {
      //console.log(response);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(response);
    });

})

//fetch individual product data
app.get('/fetchproducts/:id', (req, res) => {
  //axios call to fetch data from MockAPI
  axios.get(`http://5c983a812e1ca60014d60d43.mockapi.io/product/${req.params.id}`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
})

//post to delete product data
app.post('/deleteproduct/:id', (req, res) => {
  axios.delete(`http://5c983a812e1ca60014d60d43.mockapi.io/product/${req.params.id}`)
    .then((response) => {
      //console.log(response);
      if (response.status === 200) {
        res.json({
          status: "success",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    })
})

//post to update product data
app.put('/updateproduct/:id', (req, res) => {
  //axios call to update record
  axios.put(`http://5c983a812e1ca60014d60d43.mockapi.io/product/${req.params.id}`, req.body)
    .then((response) => {
      //console.log(response);
      if (response.status === 200) {
        res.json({
          status: "success",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    })
})

//post new data
app.post('/postproductdata', (req, res) => {
  console.log(req.body);
  axios.post('http://5c983a812e1ca60014d60d43.mockapi.io/product', req.body)
    .then((response) => {
      console.log(response);
      res.json(true);
    })
    .catch((error) => {
      console.log(error);
    })
})

//tell the server to listen at a port
app.listen(1337);