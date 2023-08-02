import { combineReducers,Reducer } from 'redux';
import solvedReducer, { solvedCounterState } from './recentlySolvedReducer'; // Assuming you have a separate reducer file for recentlySolved

interface AppState {
  solved: solvedCounterState;
}

const rootReducer: Reducer<AppState> = combineReducers({
  solved  : solvedReducer,
});


export type {AppState};
export default rootReducer;

