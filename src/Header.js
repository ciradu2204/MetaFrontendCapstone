import { Link } from "react-router-dom";
import restauranFood from "./Img/restauranfood.jpg"
const Header = () => {


    return (
        <div id="header">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <button><Link href="booking" >Reserve a Table</Link></button>
            </div>
            <img src={restauranFood} alt="restaurant Food" className="restaurantFoodImg"/>
        </div>

    )
}

export default Header;