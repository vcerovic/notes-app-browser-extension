export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

export interface LogInRequest {
    email: string;
    password: string;
}

export interface AuthResponse {
    customerId: string,
    name: string,
    accessToken: string,
}


export interface AuthService {
    registerUser: (req: RegisterRequest) => Promise<AuthResponse>;
    logInUser: (req: LogInRequest) => Promise<AuthResponse>;
}


export interface AuthContext {
    loading: boolean;
    accessToken: string | null;
    saveAccessToken: (accessToken: string) => Promise<void>;
}
