import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../dtos/IUser";
import USER_DATA from "../../../constants/usersData";

interface userSliceState {
  users: IUser[];
  isLogged: boolean;
  selectedUser: IUser;
}

const initialState: userSliceState = {
  users: USER_DATA,
  isLogged: false,
  selectedUser: {} as IUser,
};

export const userSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<IUser>) => {
      state.isLogged = true;
      state.selectedUser = action.payload;
      return state;
    },
    signOut: (state) => {
      state.isLogged = false;
      state.selectedUser = {} as IUser;
      return state;
    },
    createUser: (state, action: PayloadAction<IUser>) => {
      state.users = [...state.users, action.payload];
      return state;
    },
  },
});

export const { signIn, signOut, createUser } = userSlice.actions;

export default userSlice.reducer;
