import { IHttpResponseError } from './../../../types/socket';
import { createSlice } from "@reduxjs/toolkit";
import { REDUCER_NAMES } from "../../../types/actions";
import { ISocketError } from "../../../types/socket";
import { IUser } from "../../../types/user";
import signUpRequest from "../thunk/user/signUpRequest";

interface IState {
  isLoading: boolean,
  error: Error | ISocketError | IHttpResponseError | null,
  user: IUser | null,
}

const initialState: IState = {
  error: null,
  isLoading: false,
  user: null,
};

const userSlice = createSlice({
  name: REDUCER_NAMES.USER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpRequest.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(signUpRequest.fulfilled,
        (state, action) => {          
          state.error = null;
          state.isLoading = false;
          state.user = action.payload as IUser;
      })
      .addCase(signUpRequest.rejected,
        (state, action) => {
          state.error = 
            action.payload as IHttpResponseError
            || action.error as IHttpResponseError;
          state.isLoading = false;
      });
  },
});

const { reducer: userReducer, actions } = userSlice;

export default userReducer;
