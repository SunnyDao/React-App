import fetch from 'isomorphic-fetch';
import axios from 'axios';

export const ART_CREATE_ITEM = 'ART_CREATE_ITEM';
export const ART_DELET_ITEM = 'ART_DELET_ITEM';
export const ART_UPDATA_ITEMS = 'ART_UPDATA_ITEMS';
export const UPDATE_ENTRY_LIST = 'UPDATE_ENTRY_LIST';

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
        type:UPDATE_ENTRY_LIST,
        items
    }
}
export function fetchEntryList(url) {
    return (dispatch) => {
        return fetchItems(url)
        .then(function(res){
            if(res.status=='200'){
                dispatch(updataArtItems(res.data.data))
            }
        })
        .catch(function(err){
            console.log('Error:'+err)
        })
    };
}
function fetchItems(url){
    return axios.get(url);
}