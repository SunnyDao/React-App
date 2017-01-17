import fetch from 'isomorphic-fetch';

export const ART_CREATE_ITEM = 'ART_CREATE_ITEM';

export function artCreateItem(){
    console.log('创建文章')
    return {type:ART_CREATE_ITEM}
}