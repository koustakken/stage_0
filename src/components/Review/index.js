import React from 'react'

export const Review = ({ author, text, rating }) => {
	return (
		<div>
			<span>{author}</span>
			<span>{text}</span>
			<span>{rating}</span>
		</div>
	)
}
