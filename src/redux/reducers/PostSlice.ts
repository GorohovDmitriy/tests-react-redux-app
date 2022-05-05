import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPosts } from '../actions/postsAction'
import { Post, PostsState } from '../types'

const initialState: PostsState = {
	posts: [],
	error: '',
	loading: false,
	success: '',
}

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchPosts.fulfilled.type]: (state, action: PayloadAction<Post[]>) => {
			state.loading = false
			state.error = ''
			state.posts = action.payload
			state.success = 'Данные пришли без ошибок!!!'
		},
		[fetchPosts.pending.type]: (state) => {
			state.loading = true
		},
		[fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
			state.loading = false
			state.error = action.payload
		},
	},
})

export default postsSlice.reducer
