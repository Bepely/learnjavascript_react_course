import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish";

function CartItem({ dishId, amount }) {
  const dish = useSelector((state) => selectDishById(state, dishId));

  return (
    <div>
      {dish.name} - {amount} шт.
    </div>
  );
}

export default CartItem;
