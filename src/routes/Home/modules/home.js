import update from "react-addons-update";
import constants from "./actionConstants";

const { CHANGE_NAME, 
    CHANGE_AGE
  } = constants;



export function changeName(payload){
	return{
		type:CHANGE_NAME,
		payload
	}
}

export function changeAge(payload){
	return{
		type:CHANGE_AGE,
		payload
	}
}


function handleChangeName(state, action){
	return update(state, {
		name:{
			$set:action.payload
		}
	})
}

function handleChangeAge(state, action){
	return update(state, {
		age:{
			$set:action.payload
		}
	})
}

const ACTION_HANDLERS = {
	CHANGE_NAME:handleChangeName,
    CHANGE_AGE:handleChangeAge
}

const initalState = {
    name:{},
    age:{}
};

export function HomeReducer (state = initalState, action) {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}