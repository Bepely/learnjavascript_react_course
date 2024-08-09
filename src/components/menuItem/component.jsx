import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish";
import { NavLink } from "react-router-dom";

function MenuItem({ dishId }) {
  const dish = useSelector((state) => selectDishById(state, dishId));

  return <NavLink to={`/dish/${dishId}`}>{dish.name}</NavLink>;
}

export default MenuItem;
