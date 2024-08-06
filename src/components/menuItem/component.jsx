import Counter from "../counter/component"
import { useUser } from "../userContext";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish";

function MenuItem({dishId}) {
    const userValue = useUser()

    // Fetch the dishes based on the menu array
    const dish = useSelector((state) => selectDishById(state, dishId));

    return <div>{dish.name} {userValue.value !== null ? <Counter /> : ''}</div>
}
                

export default MenuItem;