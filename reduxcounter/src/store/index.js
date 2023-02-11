// import {createStore} from 'redux';
import {createSlice ,configureStore} from '@reduxjs/toolkit';
// const redux = require('redux'); // above is the method we use in react to import redux.

const initialState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament(state) {
            state.counter++;
        },
        decreament(state) {
            state.counter--;
        },
        increase(state,action) {
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});


// const store = redux.createStore(counterReducer); //we no longer need this instead we can use something like
// const store = createStore(counterSlice.reducer); // we are gonna use more powerful than him
const store = configureStore({
    reducer: counterSlice.reducer
});

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

