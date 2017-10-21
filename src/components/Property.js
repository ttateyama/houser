import React from 'react';
import './Property.css';
import Trash from 'react-mdi-props/icons/close-circle';
import Star from 'react-mdi-props/icons/star-circle';
import Share from 'react-mdi-props/icons/share-variant';

const Property = (props) => {
    return (
        <div className='Property'>
            <div className='Property-image-container'>
                <img className='Property-image' src={`${props.imageUrl}`} alt=''/>
            </div>
            <hr className='Property-divider'/>
            <div className='Property-details'>
                <div className='Property-about'>
                    <div className='Property-name'>{props.name}</div>
                    <div className='Property-desription'>{props.description}</div>
                </div>
                <div className='Property-specs'>
                    <table className='Property-specs-table'>
                        <tbody>
                            <tr>
                                <th>Loan:</th>
                                <td>${Number(props.loanAmount).toLocaleString('en')}</td>
                            </tr>
                            <tr>
                                <th>Monthly Mortage:</th>
                                <td>${Number(props.monthlyAmount).toLocaleString('en')}</td>
                            </tr>
                            <tr>
                                <th>Recommended Rent:</th>
                                <td>${Number(0).toLocaleString('en')}</td>
                            </tr>
                            <tr>
                                <th>Desired Rent:</th>
                                <td>${Number(props.desiredRent).toLocaleString('en')}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='Property-address'>
                        <div className='Property-address-title'>Address:</div>
                        <div className='Property-address-value'>{props.address}<br/>{`${props.city}, ${props.state} ${props.zip}`}</div>
                    </div>
                </div>
            </div>
            <hr className='Property-divider'/>
            <div className='Property-actions'>
                <Trash
                    className="action-icon action-active"
                    fill={'#F13C45'}
                    size={20}
                    onClick={() => console.log('clicked')}
                />
                <Star
                    className="action-icon"
                    fill={'#FAC00B'}
                    size={20}
                />
                <Share
                    className="action-icon"
                    fill={'#00AEFF'}
                    size={20}
                />
            </div>
        </div>
    )
}

export default Property;