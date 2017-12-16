import { Itodo } from './todo';
import * as actions from './actions';


export interface IAppState {
    todo: Itodo[] ;
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    todo: [],
    lastUpdate: null
};

export function rootReducer(state, action) {

    switch (action.type) {
        case actions.ADD_TODO.type:
            action.payload.id = state.todo.length + 1;
            return Object.assign({}, state, {
                todo: state.todo.concat(Object.assign({}, action.payload)),
                lastUpdate: new Date()
            });

        case actions.TOGGLE_TODO.type:

            const todo = state.todo.find(t => t.id === action.payload);
            const index = state.todo.indexOf(todo);
            return Object.assign({}, state, {
               todo: [].concat(state.todo.slice(0, index), Object.assign({}, todo, {isActive: !todo.isActive}),
                                    state.todo.slice(index + 1, state.todo.length)),
            lastUpdate: new Date()
            });

        case actions.DELETE_TODO.type:
            const todoIndex = state.todo.indexOf(state.todo.find(t => t.id === action.payload));
            console.log(todoIndex);
            return Object.assign({}, state, {
                todo: state.todo.filter(t => t.id !== action.payload),
                lastUpdate: new Date()
            });

        case actions.DELETE_ALL.type:

        return Object.assign({}, state, {
            todo: [],
            lastUpdate: new Date()
        });

        case actions.SORT.type:
            const sorted = state.todo.sort(function(a, b) {
                if (a.priority < b.priority) { return -1; }
                if (a.priority > b.priority) { return 1; }
                return 0;
        });
        return Object.assign({}, state, {
            todo: sorted,
            lastUpdate: new Date()
        });


        }

    return state;
}

