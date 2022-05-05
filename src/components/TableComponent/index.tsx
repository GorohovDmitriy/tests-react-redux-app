import React, { ChangeEvent, FC, useMemo, useState } from 'react'
import { Divider, Input, Table, Tag, Typography } from 'antd'
import { Post } from '../../redux/types'
import { SearchOutlined } from '@ant-design/icons'

interface TableProps {
	posts: Post[]
	className?: string
}

const TableComponent: FC<TableProps> = ({ posts, className }) => {
	const [searchText, setSearchText] = useState('')

	const dataSource = useMemo(() => {
		return posts.map((post: Post) => ({ ...post, key: post.id }))
	}, [posts])

	const columns = [
		{
			title: 'ID',
			dataIndex: 'id',
			kay: 'id',
			render: (value: number) => (
				<Tag color='geekblue' key={value}>
					{value}
				</Tag>
			),
			sorter: (a: Post, b: Post) => a.id - b.id,
		},
		{
			title: 'Заголовок',
			dataIndex: 'title',
			kay: 'Заголовок',
			render: (text: string) => (
				<Typography.Text type='success'>{text}</Typography.Text>
			),
			filters: [
				{
					text: 'quia',
					value: 'quia',
				},
				{
					text: 'est',
					value: 'est',
				},
			],
			onFilter: (value: any, item: Post) => item.title.includes(value),
		},
		{
			title: 'Описание',
			dataIndex: 'body',
			kay: 'Описание',
			render: (text: string) => (
				<Typography.Text type='warning'>{text}</Typography.Text>
			),
		},
	]

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value)
	}

	const filters = useMemo(() => {
		return dataSource.filter((post: Post) => {
			return post.body.includes(searchText)
		})
	}, [dataSource, searchText])

	return (
		<>
			<Input
				placeholder='Поиск по описанию...'
				onChange={handleChange}
				className='search'
				suffix={<SearchOutlined />}
			/>
			<Divider />
			<Table
				dataSource={filters}
				columns={columns}
				size='small'
				className={className}
				pagination={{
					position: ['bottomCenter'],
				}}
			/>
		</>
	)
}

export default TableComponent
