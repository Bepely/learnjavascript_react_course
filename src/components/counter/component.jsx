import styles from "./style.module.css";

function Counter({ value, increment, decrement }) {
  return (
    <div className={styles.counterWrapper}>
      <button onClick={decrement}>-</button>
      <span>{value}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
