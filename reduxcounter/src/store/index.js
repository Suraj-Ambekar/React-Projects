import {createStore} from 'redux';
// const redux = require('redux'); // above is the method we use in react to import redux.

const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'INCREMENT'){
        return {
            counter: state.counter + 1,
        } 
    }

    if(action.type === 'INCREASE'){
        return {
            counter: state.counter + action.amount,
        } 
    }

    if(action.type === 'DECREMENT'){
        return {
            counter: state.counter - 1,
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

