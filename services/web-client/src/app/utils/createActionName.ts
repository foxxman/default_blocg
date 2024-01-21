import { REDUCER_NAMES } from "../../types/actions";

const createActionName = (reducerName: REDUCER_NAMES, actionName: string): string => `${reducerName}/${actionName}`;

export default createActionName;