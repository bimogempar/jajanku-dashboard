import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  user: any;
}

const initialState: InitialState = {
  user: {},
};

export const users = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: () => initialState,
  },
});

export const { setUser, removeUser } = users.actions;
export default users.reducer;