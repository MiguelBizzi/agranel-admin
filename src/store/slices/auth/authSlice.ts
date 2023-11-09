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
    editUser: (state, action: PayloadAction<IUser>) => {
      state.users = state.users.map((p) => {
        if (p.user_id === action.payload.user_id) {
          return action.payload;
        }

        return p;
      });

      return state;
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((u) => u.user_id !== action.payload);
      return state;
    },
  },
});

export const { signIn, signOut, createUser, editUser, deleteUser } =
  userSlice.actions;

export default userSlice.reducer;
