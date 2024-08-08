import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart/cart";

import CartItem from "../cartItem/component";

function Cart() {
  const items = useSelector(selectCartItems);

  return (
    <>
      {items.length ? (
        <ul>
          {items.map(({ itemId, amount }) => {
            return (
              <li key={itemId}>
                <CartItem dishId={itemId} amount={amount} />
              </li>
            );
          })}
        </ul>
      ) : (
        "Добавьте блюда в корзину"
      )}
    </>
  );
}

export default Cart;
