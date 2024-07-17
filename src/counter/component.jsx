import { useState } from "react";

function Counter() {
    // Create a counter for added dishes
    const [itemsCounter, setItemsCounter] = useState(0);

    const itemsMin = 0;
    const itemsMax = 5;

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
        <div>
            <button onClick={removeItem}>-</button>
            <span>{itemsCounter}</span>
            <button onClick={addItem}>+</button>
        </div>
    );
}

export default Counter;
