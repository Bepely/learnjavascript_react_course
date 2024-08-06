import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart/cart";

import { useUser } from "../userContext";

import styles from "./style.module.css";

import CartItem from "../cartItem/component";

function Cart() {
  const items = useSelector(selectCartItems);
  const userValue = useUser();

  return (
    <div className={styles.cartWrapper}>
      <h2>Корзина</h2>
      {userValue.value !== null ? (
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
      ) : (
        "Авторизуйтесь для пополнения корзины"
      )}
    </div>
  );
}

export default Cart;
