const postReducer =(state=[], action)=>{
     switch(action.type){
       case "ADD":
                console.log(action);
               return state.concat([action.storeData]);
       default:
            return state;
     }
}
export default postReducer;
