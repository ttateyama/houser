import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import './Dashboard.css';
import Header from './Header';
import Property from './Property';
import {getProperties} from '../actions/creators'

class Dashboard extends Component {
  componentDidMount() {
    getProperties()
  }
  render() {
      return (
      <div>
        <Header />
        <div className='Dashboard'>
          <Link to='/addproperty/1' className='Dashboard-button-add'>Add New Property</Link>
          <div className='Dashboard-filter'>
            <div>List properties with "desired rent" greater than: $ </div>
            <input className='Dashboard-filter-input' id="amount" placeholder={0} type='number'/>
            <button className='Dashboard-filter-button button-1'>Filter</button>
            <button className='Dashboard-filter-button button-2'>Reset</button>
          </div>
          <hr className='Dashboard-divider'/>
          <div className='Dashboard-listings'>
            <div className='Dashboard-listings-header'>Home Listings</div>
            {
              this.props.properties
              ? this.props.properties.map((property) => <Property key={property.propertyId} {...property}/>)
              : null
            }
          </div>          
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {properties: state.properties}
}
let mapDispatchToProps = {
  getProperties: getProperties
}
let reduxInsAndOuts = connect(mapStateToProps, mapDispatchToProps)
export default reduxInsAndOuts(Dashboard);