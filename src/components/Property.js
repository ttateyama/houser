import React from 'react';
import './Property.css';

const Property = (props) => {
    return (
        <div className='Property'>
            <div className='Property-image-container'>
                <img className='Property-image' src={`${props.imageUrl}`} alt=''/>
            </div>
            <hr className='Property-divider'/>
            <div className='Property-details'>
                <div className='Property-title'>{props.name}</div>
            </div>
        </div>
    )
}

export default Property;