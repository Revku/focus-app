import { configureStore, createSlice } from '@reduxjs/toolkit';
import useSettings from 'hooks/useSettings';
import saveSettings from 'hooks/saveSettings';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: useSettings(),
  reducers: {
    updateSettings: (state, { payload }) => {
      saveSettings(payload);
      return payload;
    },
  },
});

export const { updateSettings } = settingsSlice.actions;

export const store = configureStore({
  reducer: {
    settings: settingsSlice.reducer,
  },
});
