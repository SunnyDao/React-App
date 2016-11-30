export default function todos (state=[],action){
	switch (action.type){
		case 'INCREMENT':
			return state.concat([action.text]);
		default:
			return state;
	}
}