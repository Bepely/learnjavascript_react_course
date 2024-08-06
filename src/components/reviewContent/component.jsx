import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review";

function ReviewContent({reviewId}) {

    const review = useSelector((state) => {
        return selectReviewById(state, reviewId)    
    }
    )

    return ( <div>{review.text}</div> );
}

export default ReviewContent;