import UserButton from "../userButton/component";
import styles from "./style.module.css";

import { useUser } from "../userContext";

function LoginWrapper() {
  const userValue = useUser();
  return (
    <div className={styles.loginWrapper}>
      <span>{userValue.value !== null ? userValue.value : ""} </span>
      <UserButton />
    </div>
  );
}

export default LoginWrapper;
