import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { hashHistory,  Route,  Router, IndexRoute} from 'react-router';
import LyricalApp from './components/LyricalApp';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import SongList from './components/SongList';


const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={LyricalApp}>
          <IndexRoute component={SongList}/>
          <Route path="/songs/new" component={SongCreate}/>
          <Route path="/songs/:id" component={SongDetail}/>
        </Route>

        
      </Router>
      
    </ApolloProvider>
  )    
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
