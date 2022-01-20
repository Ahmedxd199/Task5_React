
const INITIAL_STATE = {
  cart : [],
  count: 0,
}


export default function MovieReducer(state = INITIAL_STATE , action){


  switch(action.type){
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart ,action.itemId],
        count : state.count + 1
      }
     case "DEL_FROM_CART":
       return {
         ...state,
         cart: state.cart.filter((item)=> item !== action.itemId) ,
         count : state.count -1
       }  
    default: 
      return state
  }




}

//console.log(INITIAL_STATE.cart)

