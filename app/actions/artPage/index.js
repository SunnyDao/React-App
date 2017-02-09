import fetch from 'isomorphic-fetch';

export const ART_CREATE_ITEM = 'ART_CREATE_ITEM';
export const ART_DELET_ITEM = 'ART_DELET_ITEM';

export function artCreateItem(){
    return {
        type:ART_CREATE_ITEM
    }
}
export function artDeletItem(){
    return {
        type:ART_DELET_ITEM
    }
}
export function fetchEntryList() {
    return dispatch => {
        storage.getAll()
        .then(items => dispatch(updateEntryList(items)));
    };
}