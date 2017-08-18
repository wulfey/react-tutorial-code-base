import React from 'react';
import { Component} from 'react';


// more presentation component 
const Footer = ({
  store
}) => {
  return (
    <p>
      Show:
        {' '}
        <FilterLink
          store={store}
          filter='SHOW_ALL'

        >
          All 
        </FilterLink>

        {' '}
        <FilterLink
          store={store}
          filter='SHOW_ACTIVE'

        >
          Active 
        </FilterLink>

        {' '}
        <FilterLink
          store={store}
          filter='SHOW_COMPLETED'

        >
          Completed 
        </FilterLink>
    </p>
  )
  
}

// container, provides the data and the behavior
class FilterLink extends Component {
  componentDidMount(){
    const {store} = this.context;
    this.unsubscribe = this.props.store.subscribe(() =>
       this.forceUpdate()
    )
  }

  componentWillUnMount(){
    this.unsubscribe();
  }

  render(){
    const props = this.props;
    const {store} = this.contex;
    const state = this.props.store.getState();
    return(
      <Link
        active={
          props.filter === state.visibilityFilter
        }
        onClick={() =>
          this.props.store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }
      >
        {props.children}
      </Link>

    )
  }
}

FilterLink.contextTypes = {
  store: React.PropTypes.object
}


// only the appearance 
const Link = ({
  active,
  children,
  onClick
}) => {
  // the span there is an alternative to an <a href> it looks clean</a>
  if (active){ 
    return <span>{children}</span>
  }

  return (
    <a href='#'
      onClick= {e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  )
}


  

export default Footer;