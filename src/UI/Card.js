import classes from './Card.module.css'
import {Link} from 'react-router-dom';

const Card = props => {
    return <div className={`${classes.card} ${props.className}`}>
        <h2> {props.countryName}</h2>
        <img src={props.flag} className={classes.image}/>
        <div> {props.capital}</div>
        <div> {props.pop}</div>
        <div> {props.region}</div>
        <Link to= {`${props.countryName}`}>
         <button value={props.countryName} onClick={props.onButtonClick}>Details</button>
        </Link>
        
    </div>
};

export default Card;