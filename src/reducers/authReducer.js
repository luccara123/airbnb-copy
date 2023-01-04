// reducer is a function that returns a piece of state

export default (state = {}, action) =>{
    if(action.type ==="REGISTER_ACTION"){
        return action.payload;
    } else if(action.type==="LOGOUT"){
        return{};
    } 
    else{
        return state;
    }
}