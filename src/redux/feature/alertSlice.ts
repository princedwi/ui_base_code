import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertData, Alert } from "../../types/user.types";

const initialState: Alert = {
  type: "primary",
  show: true,
  message: "",
};

export const alertState = createSlice({
  name: "alert",
  initialState,
  reducers: {
    handleAlert: (state, action: PayloadAction<Alert>) => {
      const { payload } = action;
      state.show = payload.show;
      state.type = payload.type;
      state.message = payload.message;
    },
  },
});

export const { handleAlert } = alertState.actions;
export default alertState.reducer;
