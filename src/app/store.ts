import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/gameOperations/gameSlice';

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