import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { modalNames } from "../../../types/modals";
import { RootState } from "..";

interface ModalsState {
  [index: string]: boolean;
}

const initialState: ModalsState = {
  [modalNames.auth]: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    changeVisability: (state, action: PayloadAction<{ modalName: modalNames }>) => {
      const { modalName } = action.payload;
      state[modalName] = !state[modalName];
    },
  },
});

const { reducer: modalsReducer, actions } = modalsSlice;

const { changeVisability } = actions;

export const toggleModal = (modalName: modalNames) => (dispatch: any) => {
  dispatch(changeVisability({ modalName }));
};

export const getIsModalOpen = (modalName: modalNames) => (state: RootState) =>
  state.modals[modalName];

export default modalsReducer;
