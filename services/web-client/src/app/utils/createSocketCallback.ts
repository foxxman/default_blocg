import { IOnSocketError, IOnSocketSuccess, ISocketResponse } from "../../types/socket";

interface IProps {
    onError?: IOnSocketError,
    onSuccess?: IOnSocketSuccess,
}

const createSocketCallback = ({onError, onSuccess}: IProps) => {
    const callback = (props: ISocketResponse<any>) => {
        if (onError && props.error) {
            onError(props.error);
        }

        if (onSuccess && props.result) {
            onSuccess(props.result)
        }
    }

    return callback;
}

export default createSocketCallback;
