import axios from 'axios'
import { Post } from '../types'
import { createAsyncThunk } from '@reduxjs/toolkit'

// export const fetchPosts = () => async (dispatch: AppDispatch) => {
// 	try {
// 		dispatch(postsSlice.actions.postsFetching())
// 		const response = await axios.get<Post[]>(
// 			'https://jsonplaceholder.typicode.com/posts',
// 		)
// 		dispatch(postsSlice.actions.postsFetchingSuccess(response.data))
// 	} catch (error) {
// 		dispatch(postsSlice.actions.postsFetchingError('Ошибка данных!!!'))
// 	}
// }

export const fetchPosts = createAsyncThunk(
	'post/fetch',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<Post[]>(
				'https://jsonplaceholder.typicode.com/posts',
			)
			thunkAPI.fulfillWithValue('Данные пришли без ошибок!!!')
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue('Ошибка данных!!!')
		}
	},
)
