const initialstate={}; 

const reducer =(state=initialstate , action)=>{
    switch(action.type){
        case "pass":
            return action.payload;
        case "unPass":
            return action.payload;
            default:
                return state

    }


}

export default reducer;