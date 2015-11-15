import { combineReducers } from 'redux';
import { KEY_UP, KEY_DOWN, KEY_LEFT, KEY_RIGHT } from '../actions';

function cursor(state = {color: 'blue',x:0,y:0}, action) {
  switch(action.type) {
    case KEY_UP:
      return {...state,
        y: Math.max(state.y - 1, 0)
      }
    case KEY_DOWN:
      return {...state,
        y: Math.min(state.y + 1, 4)
      }
    case KEY_LEFT:
      return {...state,
        x: Math.max(state.x - 1, 0)
      }
    case KEY_RIGHT:
      return {...state,
        x: Math.min(state.x + 1, 4)
      }
    default:
      return state;
  }

  return state;
}

const app = combineReducers({
  cursor
});

export default app;