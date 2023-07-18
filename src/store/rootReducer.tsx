import { combineReducers,Reducer } from 'redux';
import recentlySolvedReducer, { CounterState } from './recentlySolvedReducer'; // Assuming you have a separate reducer file for recentlySolved

interface AppState {
  counter: CounterState;
}

const rootReducer: Reducer<AppState> = combineReducers({
  counter : recentlySolvedReducer,
});



export default rootReducer;

