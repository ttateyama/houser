import ActionConstants from '../actions/constants';
const {
    GET_PROPERTIES
} = ActionConstants;

let initialState = {
    properties: [
        {
            propertyId: 1,
            name: 'my house',
            description: 'this is my little house with a longer description, it has a nice white fence',
            address: '9810 S Yorkshire Dr',
            city: 'West Jordan',
            state: 'UT',
            zip: 84081,
            imageUrl: 'https://i.pinimg.com/736x/47/b9/7e/47b97e62ef6f28ea4ae2861e01def86c--my-dream-house-dream-big.jpg',
            loanAmount: 600000,
            monthlyAmount: 5000,
            desiredRent: 5500 
        },
        {
            propertyId: 2,
            name: 'my second house',
            description: 'summer home',
            address: '123 Beach Ln',
            city: 'Honolulu',
            state: 'HI',
            zip: 90000,
            imageUrl: 'https://blog1.fkimg.com/wp-content/uploads/2017/03/Panama-City-Beach-Florida-Friends-Summer-Beach-House.jpg',
            loanAmount: 1000000,
            monthlyAmount: 8000,
            desiredRent: 8800 
        }
    ]
};

//REDUCER
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROPERTIES:
            return state.properties;
        default: return state;
    }
}