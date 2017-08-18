// *************************     IMPORTS   ************************* //

// libraries
import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
// import { Provider } from 'react-redux';

// components
import Footer from './components/footer';
import Counter from './components/counter';
import TodoToggle from './components/todoToggle';
import ArrayMutationTester from './components/arrayMutation';
import TodoList from './components/todoList';
import AddTodo from './components/addTodo';
// import TodoContainer from './components/todoContainer';


// reducers
import counter from './reducers/counter_reducer';
import reducers from './reducers/index';

// import { Provider } from "react-redux";
// import  deepFreeze from 'deep-freeze';
// import  expect from 'expect';


// *************************     REACT   ************************* //

// styling -- move to .css
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

// store declaration, reducer combining, and subscription
// const counterStore = createStore(counter);

// const createStoreWithMiddleware = applyMiddleware()(createStore);



// this is the Visible Todos reducer
// notice, NO JSX IN REDUCERS
const getVisibleTodos = (
  todos,
  filter
  ) => {
    switch (filter){
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(
          t => t.completed 
        )
      case 'SHOW_ACTIVE':
        return todos.filter(
          t => !t.completed
        )
      default:
        return todos;
    }
  }



class VisibleTodoList extends Component {
  
  componentDidMount(){
    const {store} = this.context;
    this.unsubscribe = this.props.store.subscribe(() =>
        this.forceUpdate()
    )
  }

  componentWillUnMount(){
    this.unsubscribe();
  }
  
  render() {
    const props = this.props;
    const {store} = this.context;

    const state = store.getState();
    return (
      <TodoList 
        todos={
          getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onTodoClick={id=>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })

        }
      />
    )
  }
}


VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
}

// the optimial, not terible wya to write this
// is that the CONTRAINER elements should subscribe to the store
const TodoApp = ({store}) =>
{
  return (
      <div>
          <div style={styles}>
        
          <h2>
            TODO app, add them below! {"\u2728"}
          </h2>
          {/* <TodoToggle/> */}
          <AddTodo store={store}/>
          <VisibleTodoList store={store}/>
          <Footer store={store}/>
          </div>
          
      </div>
    )
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);

// this is REACT provider
// this is not the REACT-REDUX provider
// // this is pure facebook stuff
// class Provider extends Component {
//   getChildContext(){
//     return {
//       store: this.props.store
//     }
//   }
  
//   render() {
//     return this.props.children;
//   }
// }



// // critical syntax here, you must define the child contex ttypes
// Provider.childContextTypes = {
//   store: React.PropTypes.object 
// }

// const store = createStore(reducers);
// // const render = () => {
// ReactDOM.render(

// <Provider store={createStore(reducers)}>
//   <TodoApp/>
// </Provider>
// ,
// document.getElementById("root"));
// // }


// // this is a hack, you should have the containers subsribe
// // counterStore.subscribe(render);
// store.subscribe(render);
// console.log(store.getState());
// render();
