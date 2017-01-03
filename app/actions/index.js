const SELECT_ENTRY = 'SELECT_ENTRY';

export function selectEntry(id){
    return{
        type:SELECT_ENTRY,
        id
    }
}