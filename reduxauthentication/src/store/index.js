// import {createStore} from 'redux';
import {createSlice ,configureStore} from '@reduxjs/toolkit';
// const redux = require('redux'); // above is the method we use in react to import redux.

const initialCounterState = {counter: 0, showCounter: true};

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increament(state) {
//             state.counter++;
//         },
//         decreament(state) {
//             state.counter--;
//         },
//         increase(state,action) {
//             state.counter = state.counter + action.amount;
//         },
//         toggleCounter(state) {
//             state.showCounter = !state.showCounter;
//         },
//     }
// });

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increament (state) {
            state.counter++;
        },
        decrement (state) {
            state.counter--;
        },
        increase (state,action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter (state) {
            state.showCounter = !state.showCounter;
        },

    }
});

const initialAuthState = {
    isAuthenticated: false
};

const authSlice= createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

// const store = redux.createStore(counterReducer); //we no longer need this instead we can use something like
// const store = createStore(counterSlice.reducer); // we are gonna use more powerful than him
const store = configureStore({
    reducer: {counter: counterSlice.reducer , auth: authSlice.reducer}
});

// const counterSubscriber = () => {
//     const latestCounter = store.getState();
//     console.log(latestCounter);
// }

//now we have our react so subscriber can be react component. 
//so we are gonna use react component.

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

// store.subscribe(counterSubscriber);

// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type : 'DECREMENT'});

