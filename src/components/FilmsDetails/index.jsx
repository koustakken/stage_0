import { useCount } from '../../hooks/useCount'
import { FilmInfo } from '../FilmInfo'

export const FilmDetails = ({ title, genre, seasonsCount }) => {
	let { count, decrement, increment } = useCount(0)
	return (
		<div>
			<FilmInfo title={title} genre={genre} seasonsCount={seasonsCount} />
			<div>
				<button onClick={decrement}>-</button>
				{count}
				<button onClick={increment}>+</button>
			</div>
		</div>
	)
}
