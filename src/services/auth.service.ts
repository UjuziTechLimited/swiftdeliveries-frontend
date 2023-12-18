// auth.service.ts
export default {
    login(email: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'admin@admin.com' && password === 'admin') {
                    resolve({
                        data: {
                            token: '123456789',
                            user: {
                                name: 'Admin',
                                email: 'admin@admin.com',
                            },
                        },
                    });
                } else {
                    reject(new Error('Invalid email or password'));
                }
            });
        });
    },
    logout(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: {
                        message: 'Logout success',
                    },
                });
            });
        });
    },
};
