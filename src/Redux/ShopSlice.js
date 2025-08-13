// import { createSlice } from "@reduxjs/toolkit";
// let ShopSlicer = createSlice({
//   name: "shop",
//   initialState: {
//     cart: [],
//     wishlist: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       if (!state.cart.find((item) => item.id === action.payload.id)) {
//         state.cart.push(action.payload);
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.cart = state.cart.filter((item) => item.id !== action.payload);
//     },

  

//       addwishlistwishlist: (stat, actio) => {
//       if (!stat.wishlist.find((item) => item.id === actio.payload.id)) {
//         stat.wishlist.push(action.payload);
//       }
//     },
//     removeFromwishlist: (stat, actio) => {
//       stat.wishlist = stat.wishlist.filter((item) => item.id !== actio.payload);
//     },
//   },
// });
// export let { addToCart, removeFromCart } = ShopSlicer.actions;
// export let { addwishlistwishlist,removeFromwishlist  } = ShopSlicer.actions;

// export default ShopSlicer.reducer;





import { createSlice } from "@reduxjs/toolkit";

let ShopSlicer = createSlice({
  name: "shop",
  initialState: {
    cart: [],
    wishlist: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if (!state.cart.find((item) => item.id === action.payload.id)) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    

    addToWishlist: (state, action) => {
      if (!state.wishlist.find((item) => item.id === action.payload.id)) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart, addToWishlist, removeFromWishlist } = ShopSlicer.actions;

export default ShopSlicer.reducer;