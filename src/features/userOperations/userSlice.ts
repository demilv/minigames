import { usersThunk } from './userThunk';
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store';
import { User } from '../types/interfaces';

interface interfaceState {
    users: User[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | null
}

const initialState: interfaceState = {
    users: [],
    status: 'idle', 
    error: null,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.users = [...state.users, action.payload] 
        },
        editUser: (state, action) => {
            const index = state.users.findIndex(user => user._id === action.payload._id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user._id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(usersThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(usersThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.users = action.payload as User[];
            })
            .addCase(usersThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload as string;
            });
    }
});

export const { editUser, deleteUser, createUser } = usersSlice.actions;
export const usersDataSelect = (state: RootState) => state.users.users;
export const usersStatusSelect = (state: RootState) => state.users.status;
export const usersErrorSelect = (state: RootState) => state.users.error;

export default usersSlice.reducer;
