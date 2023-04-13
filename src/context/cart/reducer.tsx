import { CartStateType } from "./types";
import { ReducerAction } from "./types";
import { REDUCER_ACTION_TYPE } from "./constants";
import { CartItemType } from "./types";


export const reducer = (
    state: CartStateType,
    action: ReducerAction
  ): CartStateType => {
    switch (action.type) {
      case REDUCER_ACTION_TYPE.ADD: {
        if (!action.payload) {
          throw new Error("action.payload missing in ADD action");
        }
        //get information from action.payload by destructuring
        const { sku, name, price } = action.payload;
  
        //filter the cart for items that are not updating
        const filteredCart: CartItemType[] = state.cart.filter(
          (item) => item.sku !== sku
        );
  
        //to make sure the item we are updating exists
        const itemExists: CartItemType | undefined = state.cart.find(
          (item) => item.sku === sku
        );
  
        //set qty for the item
        const qty: number = itemExists ? itemExists.qty + 1 : 1;
  
        return { ...state, cart: [...filteredCart, { sku, name, price, qty }] };
      }
      case REDUCER_ACTION_TYPE.REMOVE: {
        if (!action.payload) {
          throw new Error("action.payload missing in REMOVE action");
        }
        //get information from action.payload by destructuring
        const { sku } = action.payload;
  
        //filter the cart for items that are not updating
        const filteredCart: CartItemType[] = state.cart.filter(
          (item) => item.sku !== sku
        );
  
        return { ...state, cart: [...filteredCart] };
      }
      case REDUCER_ACTION_TYPE.QUANTITY: {
        if (!action.payload) {
          throw new Error("action.payload missing in QUANTITY action");
        }
  
        const { sku, qty } = action.payload;
  
        //to make sure the item we are updating exists
        const itemExists: CartItemType | undefined = state.cart.find(
          (item) => item.sku === sku
        );
  
        if (!itemExists) {
          throw new Error("Item must exist in order to update quantity");
        }
  
        //define the updated item once confirmed it exist
        const updatedItem: CartItemType = { ...itemExists, qty };
  
        //filter the cart for items that are not updating
        const filteredCart: CartItemType[] = state.cart.filter(
          (item) => item.sku !== sku
        );
        return { ...state, cart: [...filteredCart, updatedItem] };
      }
      case REDUCER_ACTION_TYPE.SUBMIT: {
        return { ...state, cart: [] };
      }
      default:
        throw new Error("Unidentified reducer action type");
    }
  };
  
  