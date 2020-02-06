import { RENDERING_DATA } from './actionsTypes';

const initialState = [
    {
        name: 'Wallet',
        money: '$4,864',
        LinkText: 'Send to bank',
        image: 'CustomerService'
    },
    {
        name: 'Sales this month',
        money: '$1,642',
        LinkText: 'View payments history',
        image: 'ChartBar'
    }
];

const ourReducer = (state = initialState, action) => {
    switch(action.type){
        case RENDERING_DATA:
            return state;
        default:
            return state;
    }
};

export default ourReducer;