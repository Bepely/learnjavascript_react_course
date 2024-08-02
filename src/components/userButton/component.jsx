import Button from "../button/component";
import { useUser } from "../userContext";

function UserButton() {
    const {value, toggleUser} = useUser();
    return ( 
        <Button text={value === null ? 'Войти' : 'Выйти'} callback={toggleUser}/>
     );
}

export default UserButton;