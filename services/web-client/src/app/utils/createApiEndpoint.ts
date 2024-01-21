import vars from "../vars";

export enum API_WAYS {
    AUTH = 'auth',
}

interface IProps {
    way: API_WAYS,
    serviceName?: string,
}

const createApiEndpoint = (props: IProps): string => {
    const { way, serviceName} = props;
    const endpoint = vars.apiUrl + way + '/' + (serviceName || '');
    return endpoint;
}

export default createApiEndpoint;