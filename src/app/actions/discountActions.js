export function addDiscount(amount) {
	//return {
	//	type:"ADD_DISCOUNT",
	//	payload:amount
	//};
	
	return dispatch => {
		setTimeout(() => {
			dispatch({
				type:"ADD_DISCOUNT",
				payload:amount
			});
		},3000);
	}
}