
// exeuction componenets of the reducer
const todo = (state=0, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false 
            };
              // state is received here as a todo
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;

    }       
}

// matching componenets of the reducer
// this is the todos reducer 
// this should be in another file 
// reducers DO NOT HAVE JSX IN THEM
export default function todos (state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            console.log("adding TODO " + "type: " + action.type + "  text: " + action.text + "  id: " + action.id);
            return [
                ...state,
                todo(undefined,action)
            ];
        case 'TOGGLE_TODO':
            console.log("toggling TODO");
            return state.map(t => todo(t,action));
    default:
        return state;
    }
};