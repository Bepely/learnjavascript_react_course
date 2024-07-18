import ReviewForm from "../reviewForm/component"

function Review({reviews}) {
    return (
    <div>
        <h3>Отзывы</h3>
        {reviews?.length && (
            <ul>
            {/* Display every review */}
            {reviews.map(review => {
                return <li>{review.text}</li>
            })}
            </ul>
        )}
        <ReviewForm />
    </div>
    );
}

export default Review;