import type { Comment } from '../../types/types';
import Form from '../form/form';
import Review from '../review/review';

type ReviewListProps = {
  reviews: Comment[];
}

const ReviewList = ({ reviews }: ReviewListProps) => (
  <section className="property__reviews reviews">
    {reviews.length > 0 && (
      <>
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{reviews.length}</span>
        </h2>
        <ul className="reviews__list">
          {reviews.map((review) => (
            <Review key={review.id} {...review} />
          ))}
        </ul>
      </>)}
    <Form />
  </section>
);

export default ReviewList;
