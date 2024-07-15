import { useState } from "react";

function Counter() {
    // Create a counter for added dishes
    const [itemsCounter, setItemsCounter] = useState(0);

    function addItem() {
        if (itemsCounter < 5) {
            setItemsCounter(itemsCounter + 1);
        }
    }

    function removeItem() {
        if (itemsCounter > 0) {
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
