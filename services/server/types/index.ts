import { Socket } from "socket.io";
import User from "../src/db/models/user.model";

export interface ServicesProps<T> {
    socket: Socket,
    data: T,
}

export interface SignInData {
    email: string,
    password: string,

    emailUser?: User | null,
}

export interface SignUpData {
    login: string;
    email: string,
    password: string,

    emailUser?: User | null,
    loginUser?: User | null,
}