import { useUser } from "../userContext";

import styles from "./style.module.css";

import Cart from "../cart/component";

function CartWrapper() {
  const userValue = useUser();

  return (
    <div className={styles.cartWrapper}>
      <h2>Корзина</h2>
      {userValue.value !== null ? (
        <Cart />
      ) : (
        "Авторизуйтесь для пополнения корзины"
      )}
    </div>
  );
}

export default CartWrapper;
