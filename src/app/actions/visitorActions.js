export function addVisitor(name) {
	//return {
	//	type:"ADD_VISITOR",
	//	payload:name
	//};
	
	return dispatch => {
		setTimeout(() => {
			dispatch({
				type:"ADD_VISITOR",
				payload:name
			});
		},3000);
	}
}