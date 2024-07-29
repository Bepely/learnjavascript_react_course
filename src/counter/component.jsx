import { useState } from "react";
import styles from './style.module.css'


const itemsMin = 0;
const itemsMax = 99;

function Counter() {
    // Create a counter for added dishes
    const [itemsCounter, setItemsCounter] = useState(0);

    function addItem() {
        if (itemsCounter < itemsMax) {
            setItemsCounter(itemsCounter + 1);
        }
    }

    function removeItem() {
        if (itemsCounter > itemsMin) {
            setItemsCounter(itemsCounter - 1);
        }
    }

    return (
        <div className={styles.counterWrapper}>
            <button onClick={removeItem}>-</button>
            <span>{itemsCounter}</span>
            <button onClick={addItem}>+</button>
        </div>
    );
}

export default Counter;
