import Menu from '../menu/component'
import Review from '../review/component';

import styles from './style.module.css'


function Restaurant({name, menu, reviews}) {
    return ( 

        <div className={styles.restarauntWrapper}>
            <div className={styles.restarauntMenuWrapper}>
                <h1>{name}</h1>
                <Menu menu={menu}/>
            </div>
            <Review reviews={reviews}/>
        </div> 
    );
}

export default Restaurant;