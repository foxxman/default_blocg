import {  Middleware, PayloadAction } from "@reduxjs/toolkit";
import { ISocketActionProps } from "../../types/socket";

const websocketMiddleware: Middleware = 
  (store) => (next) => (action: PayloadAction<ISocketActionProps<any>>) => {
    const {type, payload} = action;
    
    switch (type) {
    
      default:
        break;
    }
    
    next(action)
  }

export default websocketMiddleware;