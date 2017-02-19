import fetch from 'isomorphic-fetch';
import axios from 'axios';
import uuid from 'uuid';

export const ART_CREATE_ITEM = 'ART_CREATE_ITEM';
export const ART_DELET_ITEM = 'ART_DELET_ITEM';
export const ART_UPDATA_ITEMS = 'ART_UPDATA_ITEMS';
export const ART_SAVE_ITEM = 'ART_SAVE_ITEM';

function createArtItem() {
    return new Promise((resolve,reject) => {
        setTimeout(()=>resolve(),1000)
    });
}

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
//更新列表
export function updateArtItems(items){
    return {
        type:ART_UPDATA_ITEMS,
        items
    }
}
//新增列表
export function updateArtSaveItem(id){
    return {
        type:ART_SAVE_ITEM,
        id
    }
}

export function artSaveItems(item,items,url){
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
            if(!id){//有id走更新流程，没有id走保存流程
                const newitem={
                    id:uuid.v4(),
                    time:new Date().getTime(),
                    title,
                    content
                };
                items = [...items, newitem];
                createArtItem()
                .then(dispatch(updateArtItems(items)))
                .then(dispatch(updateArtSaveItem(newitem.id)))
            }
        }
    }
}

export function fetchEntryList(url) {
    return (dispatch) => {
        return fetchItems(url)
        .then(function(res){
            if(res.status=='200'){
                dispatch(updateArtItems(res.data.data))
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






export const UPDATE_SAVED_ENTRY = 'UPDATE_SAVED_ENTRY';

function updateSavedEntry(id) {
  return { type: UPDATE_SAVED_ENTRY, id };
}

export function saveEntry(item) {
  const { title, content, id } = item;
  return dispatch => {
    if (id) {
      // 更新流程
      storage.updateEntry(id, title, content)
        .then(() => dispatch(updateSavedEntry(id)))
        .then(() => storage.getAll())
        .then(items => dispatch(updateEntryList(items)));
    } else {
      // 创建流程
      storage.insertEntry(title, content)
        .then(inserted => dispatch(updateSavedEntry(inserted.id)))
        .then(() => storage.getAll())
        .then(items => dispatch(updateEntryList(items)));
    }
  };
}