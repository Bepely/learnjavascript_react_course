import { useSelector } from "react-redux";
import Menu from '../menu/component';
import Review from '../review/component';
import styles from './style.module.css';
import { selectDishById } from '../redux/entities/dish';
import { selectReviewById } from '../redux/entities/review'

function Restaurant({ currentRestaurant }) {
    // Fetch the dishes based on the menu array
    const dishes = useSelector((state) =>
        currentRestaurant.menu.map(dishId => selectDishById(state, dishId))
    );

    const reviews = useSelector((state) => 
        currentRestaurant.reviews.map(reviewId => selectReviewById(state, reviewId))    
    )

    return (
        <div className={styles.restarauntWrapper}>
            <div className={styles.restarauntMenuWrapper}>
                <h1>{currentRestaurant.name}</h1>
                <Menu menu={dishes} />
            </div>
            <Review reviews={reviews} />
        </div>
    );
}

export default Restaurant;
