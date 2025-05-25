import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilterState = string;

const initialState: FilterState =  "hourly" ;

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    
    setFilter: (_, action: PayloadAction<string>) =>  action.payload,

    clearFilter: () =>  "hourly"
    },
  },
);

export const { setFilter, clearFilter } = filterSlice.actions;

export default filterSlice.reducer;
