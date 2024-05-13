import { configureStore } from "@reduxjs/toolkit"
import boardReducer from './features/boardSlice'
import favouriteReducer from './features/favouriteSlice'
import userReducer from './features/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    board: boardReducer,
    favourites: favouriteReducer
  }
})