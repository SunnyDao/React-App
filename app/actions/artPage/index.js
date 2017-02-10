import fetch from 'isomorphic-fetch';
import axios from 'axios';

export const ART_CREATE_ITEM = 'ART_CREATE_ITEM';
export const ART_DELET_ITEM = 'ART_DELET_ITEM';
export const ART_UPDATA_ITEMS = 'ART_UPDATA_ITEMS';

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
export function updataArtItems(items){
    return {
        type:ART_UPDATA_ITEMS,
        items
    }
}
export function fetchEntryList() {
    return dispatch => {
        storage.getAll()
        .then(items => dispatch(updateEntryList(items)));
    };
}