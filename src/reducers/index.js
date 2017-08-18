import {combineReducers} from 'redux';
import PostsReducer from './posts_reducer'
import books from './books_reducer';
import activeBook from './active_book_reducer';
import WeatherReducer from './fetch_weather_reducer';
import { reducer as formReducer } from 'redux-form';
import todo from './todo_reducer';
import visibilityFilter from './visibilityFilter_reducer';


// export default combineReducers({
//     books,
//     activeBook
// });

// alt syntax
const rootReducer = combineReducers({
    posts: PostsReducer,
    books: books,
    activeBook: activeBook,
    weather: WeatherReducer,
    form: formReducer,
    todo: todo,
    visibilityFilter: visibilityFilter
});
export default rootReducer;

// const rootReducer = combineReducers({
//     books
// });

// export default rootReducer;