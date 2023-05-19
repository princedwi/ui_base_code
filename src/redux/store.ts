import { configureStore } from "@reduxjs/toolkit";
import user from "./feature/userSlice";
import alert from "./feature/alertSlice";
export const store = configureStore({
  reducer: {
    user,
    alert,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
