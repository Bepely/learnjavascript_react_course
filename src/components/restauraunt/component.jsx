import Menu from "../menu/component";
import Review from '../review/component';
import styles from './style.module.css';

import { useSelector } from "react-redux";
import { selectRestarauntById } from "../../redux/entities/restaraunt";

function Restaurant({ currentRestaurantId }) {
    const currentRestaurant = useSelector((state) => selectRestarauntById(state, currentRestaurantId));

    return (
        <div className={styles.restarauntWrapper}>
            <div className={styles.restarauntMenuWrapper}>
                <h1>{currentRestaurant.name}</h1>
                <Menu menuDishesIds={currentRestaurant.menu} />
            </div>
            <Review reviewIds={currentRestaurant.reviews} />
        </div>
    );
}

export default Restaurant;
