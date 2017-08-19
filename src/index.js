import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers/index';
import './styles/style.css';
import './styles/bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostShow from './components/post_show';
import HomePage from './components/homePage';
import BookIndex from './components/book_index';
import WeatherIndex from './components/weather_index';
import TicTac from './components/tictac';
import Todo from './components/todo_index';
import VideoApp from './components/video_index';


// create a store with middleware to manage actions
import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);





ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <App/>  
                <Switch>
                    <Route path="/video" component={VideoApp} />
                    <Route path="/todo" component={Todo} />
                    <Route path="/tictac" component={TicTac} />
                    <Route path="/weather" component={WeatherIndex} />
                    <Route path="/books" component={BookIndex} />
                    <Route path="/posts/new" component={PostsNew} />
                    <Route path={`/posts/:id`}component={PostShow} />
                    <Route path="/posts" component={PostsIndex} />
                    <Route path="/" component={HomePage} />
                </Switch>
                
            </div>
        </BrowserRouter>
    </Provider>
    
    
    , document.getElementById('root'));
registerServiceWorker();



// class Hello extends React.Component{
//     render() {return <div>HELLO </div>}
// }

// class Goodbye extends React.Component{
//     render() {return <div>GOODBY </div>}
// }

//<Route path="/hello" component={Hello} />
//<Route path="/goodbye" component={Goodbye} />

// planned routes
//
//<Route path="/posts/:id" component={PostShow} />
//<Route path="/posts/new" component={PostNew} /> 