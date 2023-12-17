import type { User } from "@/types/User";


export const state = {
    user: <User>JSON.parse(localStorage.getItem('user') || '{}'),
    token: <string>localStorage.getItem('token') || '',
}

export type StateType = typeof state;