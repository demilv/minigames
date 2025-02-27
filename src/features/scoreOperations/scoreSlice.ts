import { scoresThunk } from './scoreThunk';
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store';
import { Score } from '../types/interfaces';

interface interfaceState {
    scores: Score[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | null
}

const initialState: interfaceState = {
    scores: [],
    status: 'idle', 
    error: null,
}

export const scoresSlice = createSlice({
    name: 'scores',
    initialState,
    reducers: {
        createScore: (state, action) => {
            state.scores = [...state.scores, action.payload ]
        },

        deleteScore: (state, action) => {
            state.scores = state.scores.filter(score => score._id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(scoresThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(scoresThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.scores = action.payload as Score[];
            })
            .addCase(scoresThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload as string;
            });
    }
});

export const { createScore, deleteScore } = scoresSlice.actions;
export const scoresDataSelect = (state: RootState) => state.scores.scores;
export const scoresStatusSelect = (state: RootState) => state.scores.status;
export const scoresErrorSelect = (state: RootState) => state.scores.error;

export default scoresSlice.reducer;