import reduceReducers from 'reduce-reducers';


export const initialState = {
    cart: [],
}

//Selector
// export const getCartTotal = (cart) => 
// //reduce(); tallys the price
//  cart?.reduce((amount, item) => item.price + amount, 0);

export const getCartTotal = (cart) => {
    let total = 0;
  
    if (cart) {
      for (const item of cart) {
        total += item.price;
      }
    }
  
    return total;
  };
  


export const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART':
        return {
            ...state,
            cart: [...state.cart, action.item]
        };
    default:
        return state;
    }
}

