import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation = (props) => {
  return (
    <div id="navheader">
      <ul id="linkstyle">
        <li className="listyle"><Link to="/home">Home</Link></li>
        <li className="listyle"><Link to="/products">Product List</Link></li>
        <li className="listyle"><Link to="/products/new">Product Creation</Link></li>
      </ul>
    </div >
  );

}
export default Navigation;