import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Добро пожаловать </h1>
      <p>
        Чтобы начать, пожалуйста{" "}
        <Link to="/restaraunts">Выберите Ресторан</Link>.
      </p>
    </div>
  );
}

export default HomePage;
