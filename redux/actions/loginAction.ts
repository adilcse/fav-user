import { LOGIN } from "../actionTypes";

export const loginAction = (payload: { email: string }) => ({
    type: LOGIN,
    payload
});
