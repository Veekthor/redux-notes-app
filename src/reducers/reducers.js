import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import visibilityFilter from './visibilityFilter';

const reducers = combineReducers({
  notes: notesReducer,
  visibility: visibilityFilter
});

export default reducers;

// const initialState = {
//   notes: []
// };

// function rootReducer(state = initialState, action){
//   switch(action.type){
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes:[
//           ...state.notes,
//           {
//             title: action.title,
//             content: action.content
//           }
//         ]
//       }
    
//     case REMOVE_NOTE:
//       return {
//         ...state,
//         notes: state.notes.filter((note, index) => index != action.id)
//       }
//     default:
//       return state;
//   }
// }

// export default rootReducer;