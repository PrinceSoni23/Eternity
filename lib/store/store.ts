import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/auth/userSlice'
import filterReducer from './features/dashboard/filterSlice'

export const store = configureStore({
    reducer: {
        auth: userReducer,
        filter: filterReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch