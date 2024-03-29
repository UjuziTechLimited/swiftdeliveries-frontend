import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
    state: () => ({
        users: [
            {
                id: 0,
                firstName: 'John',
                lastName: 'Doe',
                role: 'super',
                email: 'john@super.com',
                accountStatus: 'active',
                phoneNumber: '2547xxxxxxxx',
                password: '',
            },
            {
                id: 1,
                firstName: 'Jane',
                lastName: 'Doe',
                role: 'admin',
                email: 'jane@admin.com',
                accountStatus: 'active',
                phoneNumber: '2547xxxxxxxx',
                password: '',
            },
            {
                id: 2,
                firstName: 'James',
                lastName: 'Doe',
                role: 'dispatch',
                email: 'james@dispatch.com',
                accountStatus: 'active',
                phoneNumber: '2547xxxxxxxx',
                password: '',
            },
            {
                id: 3,
                firstName: 'Jill',
                lastName: 'Doe',
                role: 'rider',
                email: 'jill@rider.com',
                accountStatus: 'active',
                phoneNumber: '2547xxxxxxxx',
                password: '',
            },
        ],
    }),

    getters: {
        getUsers: (state) => state.users,
    },

    actions: {
        async fetchUsers() {
            const authStore = useAuthStore()
            try {
                const response = await axios.get('/api/users', {
                    headers: {
                        Authorization: `Bearer ${authStore.token}`,
                    },
                })
                this.users = response.data.users
            } catch (error) {
                console.error('Failed to fetch users:', error)
            }
        },

        async createUser(userData) {
            const authStore = useAuthStore()
            try {
                const response = await axios.post('/api/users', userData, {
                    headers: {
                        Authorization: `Bearer ${authStore.token}`,
                    },
                })
                this.users.push(response.data.user)
            } catch (error) {
                console.error('Failed to create user:', error)
            }
        },

        async updateUser(userId, userData) {
            const authStore = useAuthStore()
            try {
                const response = await axios.put(`/api/users/${userId}`, userData, {
                    headers: {
                        Authorization: `Bearer ${authStore.token}`,
                    },
                })
                const index = this.users.findIndex((user) => user._id === userId)
                if (index !== -1) {
                    this.users.splice(index, 1, response.data.user)
                }
            } catch (error) {
                console.error('Failed to update user:', error)
            }
        },

        async deleteUser(userId) {
            const authStore = useAuthStore()
            try {
                await axios.delete(`/api/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${authStore.token}`,
                    },
                })
                this.users = this.users.filter((user) => user._id !== userId)
            } catch (error) {
                console.error('Failed to delete user:', error)
            }
        },
    },
})
