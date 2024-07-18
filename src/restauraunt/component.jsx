import Menu from '../menu/component'
import Review from '../review/component';
import Counter from '../counter/component';

function Restaurant({name, menu, reviews}) {
    return ( 
    <div>
        <div>
            <h1>{name}</h1>
            <Menu menu={menu}/>
            <Counter />
            <Review reviews={reviews}/>
        </div>
    </div> 
    );
}

export default Restaurant;