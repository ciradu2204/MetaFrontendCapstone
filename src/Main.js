import { Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Nav from './Nav';
import BookingForm from './bookingForm';
import Footer from './Footer';
import { useEffect, useReducer, useState } from 'react';
import { useFormik } from 'formik';
import { fetchAPI, submitAPI } from './apis';
const updateTimes = (state, action) => {
   return fetchAPI(new Date(action.type))

}
const Main = () => {
  const formik = useFormik({
    initialValues: {
      resDate: new Date(),
      resTime: '',
      guests: 1,
      occasion:"birthday",
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      if(submitAPI(values)){
        setFormSubmitted(true)
      }
    },
  });
   const initializeTimes = () => {
      return fetchAPI(new Date())
    }
    const [formSubmited, setFormSubmitted] = useState(false)

   const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes)

   useEffect(() => {
     dispatch({type:formik.values.resDate})
   }, [formik.values.resDate])

   return(
    <>
      <Nav/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/booking' element={<BookingForm availableTimes={availableTimes} formSubmited={formSubmited} formik={formik}/>}/>
       </Routes>
       <Footer/>
    </>
    )
}

export default Main;