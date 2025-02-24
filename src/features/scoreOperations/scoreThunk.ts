import { createAsyncThunk } from '@reduxjs/toolkit';

export const scoresThunk = createAsyncThunk('scores/scoresThunk', async (_, { rejectWithValue }) => {
    try {
        const MIAPI = import.meta.env.VITE_MIAPI;

        const token = localStorage.getItem('authorization');

        if (!token) {
            return rejectWithValue('No se encontró el token de autenticación');
        }

        const response = await fetch(`${MIAPI}/scores`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('No se encuentran los games');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        } else {
            return rejectWithValue('Error desconocido');
        }
    }
});