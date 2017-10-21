import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../Header';
import './AddProperty.css';

const AddProperty = (props) => {
  return (
    <div>
      <Header />
      <div className='AddProperty'>
          MORE STUFF
          {props.children}
      </div>
    </div>
  );
}

export default AddProperty;