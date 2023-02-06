import classes from "./Header.module.css";
import {Fragment} from 'react';
import mealsImg from '../../assets/meals.jpg'


function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Foodies</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img  src={mealsImg}  alt="table full of meals" />
            </div>
        </Fragment>
    )
}

export default Header;