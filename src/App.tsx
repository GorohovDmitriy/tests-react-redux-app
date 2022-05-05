import React, { FC, useEffect } from 'react'
import { Col, Row } from 'antd'

import TableComponent from './components/TableComponent'

import { fetchPosts } from './redux/actions/postsAction'
import { useAppDispatch, useAppSelector } from './hooks/redux'

const App: FC = React.memo(() => {
	const dispatch = useAppDispatch()
	const { posts } = useAppSelector((state) => state.postsReducer)

	useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])

	return (
		<div className='wrapper'>
			<Row>
				<Col xs={24} md={24}>
					<TableComponent posts={posts} />
				</Col>
			</Row>
		</div>
	)
})

export default App
