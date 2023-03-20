import { useFormik } from "formik";

const BookingForm = () => {
    const formik = useFormik({
        initialValues: {
          resDate: '',
          resTime: '',
           guests: 1,
          occasion:"birthday",
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  return (
    <div id="formContainer">
        <h1>Reserve Your Table</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="resDate">Choose date</label>
        <input type="date" id="resDate" onChange={formik.handleChange} value={formik.values.resDate}/>
        <label htmlFor="resTime">Choose time</label>
        <select id="resTime" onChange={formik.handleChange} value={formik.values.resTime}>
          <option value=""></option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={formik.handleChange} value={formik.values.guests}/>
        <label for="occasion">Occasion</label>
        <select id="occasion" onChange={formik.handleChange} value={formik.values.occasion}>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" disabled={formik.values.resDate === "" || formik.values.resTime === ""}/>
      </form>
    </div>
  );
};

export default BookingForm;
