import { ERROR_CODES } from "../app/const/errors";
import { EVENTS_FROM_SERVER } from "./events/events-from-server";

export interface ISocketPayload {
    message?: string;
}

export interface subscribeProps {
    type: EVENTS_FROM_SERVER;
    action: (payload: ISocketPayload) => void;
}

export interface ISocketError {
    code: ERROR_CODES,
    field?: string,
    message?: string,
}

export interface IHttpResponseError {
    code: ERROR_CODES,
    field?: string,
    message?: string,
}

export interface ISocketResponse<A> {
    error: ISocketError | null,
    result: A,
}

export interface IHttpResponse<A> {
    data: A,
}

export type IOnSocketError = (error: ISocketError) => void
export type IOnSocketSuccess = (data: any) => void

export interface ISocketActionProps<A>{
    onError?: IOnSocketError,
    onSuccess?: IOnSocketSuccess,
    data: A,
}

export interface ISocketActionCreatorProps<A> {
    onError?: IOnSocketError,
    onSuccess?: IOnSocketSuccess,
    data: A,
}

export type ISocketActionCreator<A> = (props: ISocketActionCreatorProps<A>) => any