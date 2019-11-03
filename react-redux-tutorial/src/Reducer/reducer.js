const PostReducer = (state = [], action) => {
   switch (action.type) {
      case 'ADD':
           console.log("Recieved in Reducer:", state);
           return state.concat([action.data]);
      default:
         return state
   }
}
export default PostReducer