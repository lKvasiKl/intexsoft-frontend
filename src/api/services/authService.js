import {request} from './axiosService';

export const register = async ({email, password, firstName, lastName}) => {
    await request({
        url: "/api/auth/register",
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
        url: "/api/auth/login",
        method: "POST",
        data: {
            email,
            password
        }
    });

    localStorage.setItem(
        "tokens",
        JSON.stringify({
            accessToken: response.accessToken,
            refreshToken: response.refreshToken
        })
    );
};