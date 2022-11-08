import {createSlice} from "@reduxjs/toolkit"


const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
       products:[]
      },
    reducers: {
        addToFavorite: (state,action) => {
            state.products.push(action.payload)
        },
        removeFromFavorite: (state,action)=>{
            state.products.filter((product)=> product.id !== action.payload)
        },
        
    }
})


export const {addToFavorite, removeFromFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;