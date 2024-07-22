import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Ajusta la ruta si es necesario

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Desactiva la verificación de serialización
    }),
});
