import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/display.css';
//child - Display Parent -Product
const Display = (props) => {
  //console.log(props.data);
  return (
    <div className="displayclass">
      <img className="imgclass" src={props.data.url} alt="handbag" />
      <label className="displaylabel">{props.data.name}</label>
      <label className="displaylabel">${props.data.price}</label>
      <Link className="astyle" to={`/products/edit/${props.data.id}`}><button className="displaybtnedit">EDIT</button></Link>
      <button className="displaybtndelete" onClick={() => { props.deleteitem(props.data.id) }}>Delete</button>
    </div>

  );

}
export default Display;