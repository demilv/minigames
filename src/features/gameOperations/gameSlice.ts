import { gamesThunk } from './gameThunk';
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store';
import { Game } from '../types/interfaces';

interface interfaceState {
    games: Game[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | null
}

const initialState: interfaceState = {
    games: [],
    status: 'idle', 
    error: null,
}

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        editGame: (state, action) => {
            const index = state.games.findIndex(game => game._id === action.payload._id);
            if (index !== -1) {
                state.games[index] = action.payload;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(gamesThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(gamesThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.games = action.payload as Game[];
            })
            .addCase(gamesThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload as string;
            });
    }
});

export const { editGame } = gamesSlice.actions;
export const gamesDataSelect = (state: RootState) => state.games.games;
export const gamesStatusSelect = (state: RootState) => state.games.status;
export const gamesErrorSelect = (state: RootState) => state.games.error;

export default gamesSlice.reducer;
