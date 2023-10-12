import { useMemo } from 'react'
import { FilmDetails, Reviews, Recomendations } from './components'

export const App = () => {
	const filmsDetail = {
		id: 'adasdasdasd',
		title: 'The Simpsons',
		seasonsCounts: 33,
		genre: 'Comedy',
		similars: [
			{
				id: 'asdaasfasf',
				title: 'South Park'
			}
		],
		reviews: [{
			id: 'jhllhuoi',
			author: 'John Doe',
			text: 'Great!',
			rating: '10'
		}]
	}

	// будет пересчитывать при каждом рендре
	// const filmRating = Math.floor(FilmDetails.reviews.reduce((sum, reviews) => {
	// 	return sum + reviews.rating
	// }, 0) / filmsDetail.reviews.length
	// )
	// Нужно использовать мемоизацию
	const filmRating = useMemo(() => {
		return Math.floor(filmsDetail.reviews.reduce((sum, reviews) => {
			return sum + reviews.rating
		}, 0) / filmsDetail.reviews.length)
	}, [filmsDetail.reviews])

	return (
		<div>
			<header />
			<FilmDetails
				title={filmsDetail.title}
				genre={filmsDetail.genre}
				seasonsCount={filmsDetail.seasonsCounts}
			/>
			<Reviews reviews={filmsDetail.reviews} />
			<Recomendations />
			<footer />
		</div>
	)
}