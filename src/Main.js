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
  const [success, setSucess] = useState(false)
  const [error, setError] = useState(false)
  const initializeTimes = () => {
    return fetchAPI(new Date())
  }

 const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes)
  const formik = useFormik({
    initialValues: {
      resDate: new Date(),
      resTime: availableTimes[0],
      guests: 1,
      occasion:"birthday",
    },

    onSubmit: values => {
      console.log(values)
      if( values.resDate !== "" && values.guests > 0 && values.resTime !== ""){
        if(submitAPI(values)){
          setSucess(true)
          setError(false)
        }
      }else{
        setSucess(false)
        setError(true)
      }
    },
  });


   useEffect(() => {
     dispatch({type:formik.values.resDate})
   }, [formik.values.resDate])

   return(
    <>
      <Nav/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/booking' element={<BookingForm availableTimes={availableTimes} success={success} formik={formik} error={error}/>}/>
       </Routes>
       <Footer/>
    </>
    )
}

export default Main;