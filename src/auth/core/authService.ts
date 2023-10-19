import type { AuthResponse, AuthService, LogInRequest, RegisterRequest } from "./auth.interface";
import { API_ENDPOINTS } from "~common/endpoints";

const authService: AuthService = {
    registerUser: async function (req: RegisterRequest): Promise<AuthResponse> {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req),
        };

        try {
            const response = await fetch(API_ENDPOINTS.REGISTER, requestOptions);
            return await response.json();
        } catch (error) {
            throw new Error("Couldn't register.");
        }
    },

    logInUser: async function (req: LogInRequest): Promise<AuthResponse> {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req),
        };


        try {
            const response = await fetch(API_ENDPOINTS.LOGIN, requestOptions);
            return await response.json();
        } catch (error) {
            throw new Error("Couldn't login.");
        }
    }
}

export default authService;