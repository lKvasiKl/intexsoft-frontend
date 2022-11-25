import {request} from './axiosService';

export const register = async ({email, password, firstName, lastName}) => {
    await request({
        url: "/auth/register",
        method: "POST",
        data: {
            email,
            password,
            firstName,
            lastName
        }
    });

    await login({email, password});
};

export const login = async ({email, password}) => {
    const response = await request({
        url: "/auth/login",
        method: "POST",
        data: {
            email,
            password
        }
    });

    localStorage.setItem("token", response.token)
};