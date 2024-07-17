import Counter from "../counter/component";

function Menu({menu}) {
    return (  
    <div>
        <h3>Меню</h3>
        {menu?.length && (
            <ul>
            {menu.map((element) => {
                return <li key={element.id}>{element.name} <Counter /></li>
            })}
        </ul>
        )}

    </div>
    );
}

export default Menu;