import * as type from './actionTypes'

const initialState = {
    todo: '',
    list: {
        data: {
            search:[]
        }
    }
};

export default function app(state = initialState, action) {
    switch (action.type) {
        case type.TODO:
            return Object.assign({}, state, {
                todo: action.text
            });
        case type.SHOW:
            return Object.assign({}, state, {
                list: action.list
            });
    default:
            return state;
    }
}