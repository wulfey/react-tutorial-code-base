import {combineReducers} from 'redux';
import PostsReducer from './posts_reducer'
import { reducer as formReducer } from 'redux-form'

// export default combineReducers({
//     books,
//     activeBook
// });

// alt syntax
const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer
});
export default rootReducer;

// const rootReducer = combineReducers({
//     books
// });

// export default rootReducer;