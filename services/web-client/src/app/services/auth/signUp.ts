import { IRegisterForm } from "../../../types/auth"
import createApiEndpoint, { API_WAYS } from "../../utils/createApiEndpoint";
import httpService from "../http";

const signUp = async (data: IRegisterForm) => {
    const endpoint = createApiEndpoint({
        way: API_WAYS.AUTH,
        serviceName: 'signUp'
    })

    const user = await httpService.post(endpoint, data);

    return user
}

export default signUp;