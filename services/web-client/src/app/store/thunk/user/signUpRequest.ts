import { createAsyncThunk } from "@reduxjs/toolkit";
import createActionName from "../../../utils/createActionName";
import { REDUCER_NAMES } from "../../../../types/actions";
import { USER_STORE_ACTIONS } from "../../../../types/actions/user";
import AuthService from "../../../services/auth";
import { IRegisterForm } from '../../../../types/auth';
import { toastError } from "../../../utils/toastMessage";
import { IHttpResponseError } from "../../../../types/socket";

const action = createActionName(REDUCER_NAMES.USER, USER_STORE_ACTIONS.AUTH_REQUESTED);

const signUpRequest = createAsyncThunk(
  action,
  async (userData: IRegisterForm, { rejectWithValue } ) => {
    try {  
      const { data: createdUser } = await AuthService.signUp(userData);
      return createdUser;
    } catch (e: any) {
      const error = e?.response?.data?.details[0] as IHttpResponseError;
  
      toastError({ text: error?.message })
      
      if (error) {
        throw rejectWithValue(error);
      } else {
        throw e;
      }
    }
  }  
);

export default signUpRequest;