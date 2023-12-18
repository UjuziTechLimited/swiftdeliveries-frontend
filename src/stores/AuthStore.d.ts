export declare class AuthStore {
    login(username: string, password: string): Promise<void>;
    logout(): Promise<void>;
    register(username: string, password: string): Promise<void>;
}