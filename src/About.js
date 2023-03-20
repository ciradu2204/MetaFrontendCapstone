import restaurantChef from "./Img/restaurantchefB.jpg"
import restaurant from "./Img/restaurant.jpg"
import MarioandAdrianA from "./Img/MarioandAdrianA.jpg"
const About = () =>{

    const photos = [
        restaurantChef, restaurant, MarioandAdrianA
    ]

    return (
         <div id="about">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec est orci. Aenean a ligula at erat pharetra ultricies. Sed ultricies odio dolor, sit amet ornare nibh efficitur ut. Phasellus pulvinar arcu feugiat vehicula sollicitudin. Nam sed consectetur mauris. Nullam lobortis malesuada consectetur. Praesent finibus pulvinar neque ac porttitor. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec est orci. Aenean a ligula at erat pharetra ultricies. Sed ultricies odio dolor, sit amet ornare nibh efficitur ut. Phasellus pulvinar arcu feugiat vehicula sollicitudin. Nam sed consectetur mauris. Nullam lobortis malesuada consectetur. Praesent finibus pulvinar neque ac porttitor. </p>


          <div id="photos">
            {photos.map((photos) => (
              <img src={photos}  alt="Little lemons staff"/>
            ))}
          </div>
         </div>

     )

}

export default About;