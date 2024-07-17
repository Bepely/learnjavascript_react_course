import Menu from '../menu/component'
import Review from '../review/component';

function Restaurant({name, menu, reviews}) {
    return ( 
    <div>
        <div>
            <h1>{name}</h1>
            <Menu menu={menu}/>
            <Review reviews={reviews}/>
        </div>
    </div> 
    );
}

export default Restaurant;