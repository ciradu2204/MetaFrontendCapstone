import { useState } from "react"
import boySample from "./Img/boySample.jpeg"
import girlSample from "./Img/girlSample.jpeg"
import girlSample2 from "./Img/girlSample2.jpeg"



const Testimonials = () => {
    const [selectedTestimony, setSelectedTestimony] = useState(0)
    const testimonials = [
        {
           img:boySample,
           title: "Martin Niyonzima",
           description:"Little Lemon's restaurant provides best quality food"
        },
        {
            img:girlSample,
            title: "Celine ishimwe",
            description:"Little Lemon's restaurant delivery service is faster and cheaper."
        },
        {
            img:girlSample2,
            title: "Cynthia Iradukunda",
            description:"The customer service at Little Lemon's restaurant is non comparable."
        }
    ]
    return (
        <>
            <div className="testimonialsHeader">
            <h1>Testimonials</h1>
            </div>
            <div id="testimonials">
               {
                <div>
                    {testimonials.filter((testimony, index) => index === selectedTestimony).map((testimony, index) => (
                        <div className="testimony" key={index}>
                            <img src={testimony.img} alt={testimony.title}/>
                            <div>
                                <h4>{testimony.title}</h4>
                                <p>{testimony.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
               }
            </div>
            <div id="navigator">
                {testimonials.map((testimony, index)=> (
                    <div className={`circle ${index === selectedTestimony? "active":""}`} onClick={()=> setSelectedTestimony(index)} key={index}>
                    </div>
                ))}
            </div>


        </>
    )
}

export default Testimonials;