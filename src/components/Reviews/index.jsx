import { Review } from '../Review'

export const Reviews = ({ reviews }) => {
	return (
		<div>
			{
				reviews.length > 0 && reviews.map((review) => (
					<Review key={review.id} author={review.author} text={review.text} rating={review.rating} />
				))
			}
		</div>
	)
}
