import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state interface
interface solvedCounterState {
  solved: number[];
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
const initialState: solvedCounterState = {
  solved: [],
};

// Define the reducer function
const solvedReducer = (state: solvedCounterState = initialState, action: CounterAction): solvedCounterState => {
  switch (action.type) {
    case CounterActionTypes.PUSH:
      fetch('http://localhost:3000/db', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify({id : action.value})}).catch(error => {console.error(error);});
      return {
        ...state,
        solved: [...state.solved, action.value], 
      };
    case CounterActionTypes.PULL:
      const solvedCopy = [...state.solved];
      solvedCopy.pop();
      return {
        ...state,
        solved: solvedCopy,
      };
    default:
      return state;
  }
};

export type {solvedCounterState}
export default solvedReducer;