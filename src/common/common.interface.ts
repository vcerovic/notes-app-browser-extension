export interface Repository {
    get: <T = string>(key: string) => Promise<T>;
    set: (key: string, rawValue: any) => Promise<any>;
}