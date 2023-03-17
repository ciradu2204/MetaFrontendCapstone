
import greekSalad from "./Img/greek salad.jpg"
import bruchetta from "./Img/bruchetta.svg"
import lemonDessert from "./Img/lemon dessert.jpg"

const Special = () => {
    const specials = [
        {
            img: greekSalad,
            alt: "Greek Salad",
            title: "Green Salad",
            description: "The famous geek salad of crispy lettuce, peppers, olives, and our chicago style teta cheese, garnished with crunchy garlic and rosemary",
            price: "$12.99",

        },
        {
          img: bruchetta,
          alt: "Bruchetta",
          title: "Bruchetta",
          price: "$5.99",
          description:"Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
        },
        {
          img: lemonDessert,
          alt: "Lemon Dessert",
          title: "Lemon Dessert",
          price: "$5.0",
          description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined"
        }
    ]
    return (

        <>
        <div id="specialsHeader">
            <h1>This Week Specials!</h1>
            <button>Online Menu</button>
        </div>
        <div id="specials">
        {specials.map((special) => (
            <div className="special">
            <img src={special.img} alt={special.alt}/>
            <div className="content">
               <div>
                 <h3>{special.title}</h3>
                 <h4>{special.price}</h4>
               </div>
               <p>{special.description}</p>
               <h5>Order Deliveries</h5>
            </div>
            </div>
        ))}
        </div>
        </>
    )
}

export default Special;