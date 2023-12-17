export interface User {
    id: string; // Unique identifier for the user
    username: string;
    email: string;
    password: string;
    // Add any other relevant user data fields
}

export interface UserAddress {
    // Define address properties (e.g., street, city, state)
}

export interface UserPreferences {
    // Define preference properties (e.g., language, theme)
}
