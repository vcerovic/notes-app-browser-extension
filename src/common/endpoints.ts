export const API_BASE_URL = process.env.PLASMO_PUBLIC_API_URL;

export const API_ENDPOINTS = {
    LOGIN: `${API_BASE_URL}/auth/login`,
    REGISTER: `${API_BASE_URL}/auth/register`,
    NOTE: `${API_BASE_URL}/notes`
};