import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import './styles/style.css';
import './styles/bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostShow from './components/post_show';
// create a store with middleware to manage actions
import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);





ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <App/>
                <Switch>
                    <Route path="/posts/new" component={PostsNew} />
                    <Route path={`/posts/:id`}component={PostShow} />
                    <Route path="/" component={PostsIndex} />
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