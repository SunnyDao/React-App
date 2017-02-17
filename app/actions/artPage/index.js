import fetch from 'isomorphic-fetch';
import axios from 'axios';
import uuid from 'uuid';

export const ART_CREATE_ITEM = 'ART_CREATE_ITEM';
export const ART_DELET_ITEM = 'ART_DELET_ITEM';
export const ART_UPDATA_ITEMS = 'ART_UPDATA_ITEMS';
export const ART_SAVE_ITEM = 'ART_SAVE_ITEM';

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

export function artSaveItems(item,url){
    const {title,content,id} = item;
    return (dispatch)=>{
        if(url){
            return fetchItems(url)
            .then(function(res){
                console.log('seccess')
            })
            .catch(function(err){
                console.log('Error:'+err)
            })
        }else{
            if(!id){
                //
                
            }
        }
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