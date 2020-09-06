const PostReducer = (state = [], action) => {
   let newState;
   switch (action.type) {
      case 'ADD':
         console.log("Recieved in Reducer:", state);
         let isProdIncrease = false;
         newState = state.map(item => {
            if (item.id === action.data.id) {
               item.qty = (item.qty || 1) + 1;
               isProdIncrease = true;
            }
            return item;
         })
         if (isProdIncrease) {
            state = newState;
            return state;
         } else {
            return state.concat([action.data]);
         }
      case "REMOVE":
         console.log("Receviced remove item in reducer")
         newState = state.filter((item) => {
            
            console.log( action.data)
            return item.id !== action.data.id
         })
         state = newState;
         return state;
      default:
         return state
   }
}
export default PostReducer


// how does redux remain on server we have coded it in React application
// 