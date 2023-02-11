import {createStore} from 'redux';
// const redux = require('redux'); // above is the method we use in react to import redux.

const initialState = {counter: 0, showCounter: true};

const counterReducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT'){
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        } 
    }

    if(action.type === 'INCREASE'){
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        } 
    }

    if(action.type === 'DECREMENT'){
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        } 
    }

    if(action.type === 'TOGGLE'){
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        } 
    }    

    return state;


    
}

// const store = redux.createStore(counterReducer); //we no longer need this instead we can use something like
const store = createStore(counterReducer);


// const counterSubscriber = () => {
//     const latestCounter = store.getState();
//     console.log(latestCounter);
// }

//now we have our react so subscriber can be react component. 
//so we are gonna use react component.

export default store;

// store.subscribe(counterSubscriber);

// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type : 'DECREMENT'});

