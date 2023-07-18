import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state interface
interface CounterState {
  count: number[];
}

// Define the action types
enum CounterActionTypes {
  PUSH = 'PUSH',
  PULL = 'PULL',
}

// Define the actions
interface IncrementAction {
  type: CounterActionTypes.PUSH;
  value : number;
}

interface DecrementAction {
  type: CounterActionTypes.PULL;
}

type CounterAction = IncrementAction | DecrementAction;

// Define the initial state
const initialState: CounterState = {
  count: [],
};

// Define the reducer function
const recentlySolvedReducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case CounterActionTypes.PUSH:
      state.count.push(action.value)
      return {
        ...state,
      };
    case CounterActionTypes.PULL:
      state.count.pop()
      return {
        ...state,
      };
    default:
      return state;
  }
};

export type {CounterState}
export default recentlySolvedReducer;