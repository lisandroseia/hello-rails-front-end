import { configureStore } from '@reduxjs/toolkit'
import greetingsReducer from './Greets/greetings'

const store = configureStore({ reducer: {greetings: greetingsReducer} })
export default store
