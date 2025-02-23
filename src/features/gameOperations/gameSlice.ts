import { gamesThunk } from './gameThunk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store';
import { Game } from '../types/interfaces';

interface interfaceState {
    game: Game[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | null
}

const initialState: interfaceState = {
    game: [],
    status: 'idle', 
    error: null,
}

