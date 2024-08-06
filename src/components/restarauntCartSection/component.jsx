import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  removeCartItem,
  selectCartItemByID,
} from "../../redux/ui/cart/cart";

import Counter from "../counter/component";

function RestaurantCartSection({ id }) {
  const dispatch = useDispatch();

  const amount = useSelector((state) => selectCartItemByID(state, id));

  const addItem = () => {
    dispatch(addCartItem(id));
  };

  const removeItem = () => {
    dispatch(removeCartItem(id));
  };

  return (
    <>
      <Counter value={amount} increment={addItem} decrement={removeItem} />
    </>
  );
}

export default RestaurantCartSection;
