import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from '../features/roomOperations/roomSlice';
import userReducer from '../features/conciergeOperations/conciergeSlice';
import gameReducer from '../features/bookingsOperations/bookingsSlice'

export const store = configureStore({
    reducer: {
        scores: scoreReducer,
        users: userReducer,
        games: gameReducer,
    },
});

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
///