import { Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Nav from './Nav';
import Specials from './Specials';
import Testimonials from './Testimonies';
import BookingForm from './bookingForm';
import Footer from './Footer';
const Main = () => {

   return(
    <>
      <Nav/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/specials' element={<Specials/>}/>
         <Route path='/testimony' element={<Testimonials/>}/>
         <Route path='/booking' element={<BookingForm/>}/>
       </Routes>
       <Footer/>
    </>
    )
}

export default Main;