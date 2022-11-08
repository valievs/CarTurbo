import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      toast.success("Log in Successfully")
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      toast.error("Invalid username or password")
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      toast.success("Sign Up Successfully")
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      toast.error("Invalid username or password")
    },
    logout: (state) =>{
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
        toast.success("Logout Successfully")
    },

  },
});

export const { loginStart, loginSuccess, loginFailure,logout,registerStart, registerSuccess, registerFailure } = userSlice.actions;
export default userSlice.reducer;