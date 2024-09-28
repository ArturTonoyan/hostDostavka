import { createSlice } from "@reduxjs/toolkit";
const isUserSlice = createSlice({
  name: "test",
  initialState: {
    name: ""
  },

  reducers: {
    //! записать данные пользователя
    setUser(state, action) {
      const { data } = action.payload;
      state.name = data.name;
    },

    //! очистить пользователя
  },
});

export const { setUser } = isUserSlice.actions;

export default isUserSlice.reducer;
