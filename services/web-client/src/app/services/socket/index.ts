import io, { Socket } from "socket.io-client";
import { EVENTS_TO_SERVER } from '../../../types/events/events-to-server';
import { ISocketPayload, subscribeProps } from "../../../types/socket";

interface IEmitError {
  details: {
    message: string,
    path: string[],
    type: string,
    context: {
      label: string,
      key: string,
    }
  }[]
}

interface IEmitProps{
  type: EVENTS_TO_SERVER,
  data: any,
  cb?: (error: any, res: any) => void,
}

const serverUrl = String(process.env.REACT_APP_SOCKET_URL);
const socket: Socket = io(serverUrl);

const initConnection = () => {  
    socket.connect();
}

const emit = ({type, data, cb = undefined}: IEmitProps) => {
    if ( socket.connected ) {
          socket.emit(type, data, cb)
    } else {
        console.log('socket not connected', socket?.connected);
    }
}

const subscribe = (props: subscribeProps) => {
    if ( socket ) {
      socket.on(props.type, (payload: ISocketPayload) => {
        props.action(payload);
      });
    }
  }

const SocketService = {
    initConnection,
    emit,
    subscribe,
}

export default SocketService;