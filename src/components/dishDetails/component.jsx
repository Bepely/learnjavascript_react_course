import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectDishById } from "../../redux/entities/dish";
import {
  addCartItem,
  removeCartItem,
  selectCartItemByID,
} from "../../redux/ui/cart/cart";
import { useUser } from "../userContext";
import Counter from "../counter/component";

function DishDetail() {
  const { dishId } = useParams();
  const dispatch = useDispatch();

  const userValue = useUser();

  const dish = useSelector((state) => selectDishById(state, dishId));
  const quantity = useSelector((state) => selectCartItemByID(state, dishId));

  if (!dish) {
    return <div>Блюдо не найдено</div>;
  }

  // Handlers for adding and removing items from the cart
  const handleAdd = () => {
    dispatch(addCartItem(dishId));
  };

  const handleRemove = () => {
    dispatch(removeCartItem(dishId));
  };
  return (
    <div>
      <h1>{dish.name}</h1>
      <p>Цена - {dish.price}$</p>
      <p>
        Состоит из:{" "}
        {dish.ingredients.map((ingredient) => (
          <b key={ingredient}>{ingredient} </b>
        ))}
      </p>

      {userValue.value !== null ? (
        <>
          <h2>Добавьте блюдо в корзину</h2>
          <Counter
            value={quantity}
            increment={handleAdd}
            decrement={handleRemove}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default DishDetail;
