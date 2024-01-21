import { ExtendedError } from 'socket.io/dist/namespace';
import { Socket } from 'socket.io';

interface ICbFnProps {
    error?: ExtendedError | null,
    result?: any,
}

export type INextFn = (err?: ExtendedError) => void;
export type ICbFn = (props: ICbFnProps) => void;
export type IRouteFn<A, B> = (socket: Socket, data: A) => Promise<B>;
