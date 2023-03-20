

const BookingForm = ({availableTimes, formSubmited, formik}) => {
  return (
    <div id="formContainer">
        <h1>Reserve Your Table</h1>
        <p className="feedback">{formSubmited? "Successfully Reserved a table": null}</p>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="resDate">Choose date</label>
        <input type="date" id="resDate" data-testid="date" onChange={formik.handleChange} value={formik.values.resDate}/>
        <label htmlFor="resTime">Choose time</label>
        <select id="resTime" onChange={formik.handleChange} value={formik.values.resTime} data-testid="time" >
          {availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>{availableTime}</option>

          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={formik.handleChange} value={formik.values.guests} data-testid="guests"/>
        <label htmlFor="occasion" >Occasion</label>
        <select id="occasion" onChange={formik.handleChange} value={formik.values.occasion} data-testid="occasion">
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" disabled={formik.values.resDate === "" || formik.values.resTime === ""}/>
      </form>
    </div>
  );
};

export default BookingForm;
