import React from 'react'

export const FilmInfo = ({ title, genre, seasonsCount }) => {
	return (
		<>
			<p>{title || 'Неизвестно'}</p>
			{Boolean(genre) && <p>{genre}</p>}
			<p>{seasonsCount > 0 ? `Кол-во ${seasonsCount}` : 'Нету'}</p>
		</>
	)
}
