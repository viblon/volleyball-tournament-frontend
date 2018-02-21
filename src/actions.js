import * as type from './actionTypes';


export function addTodo(text) {
    return {
        type: type.TODO,
        text
    }
}
/*export function showRes(list) {
    return show(list)
}*/

export function showRes(list) {
    return (dispatch, getState) => Promise.resolve(dispatch(showRe(list))).then(() => {
        setTimeout(
            () => {
                if(getState().todo === '')
                    return dispatch(showRes(list));
            }
        , 2000);}
    )
}

function showRe(list) {
    return {
        type: type.SHOW,
        list
    }
}