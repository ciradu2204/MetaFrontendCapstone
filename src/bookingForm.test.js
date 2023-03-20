import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App"
test('Renders the Booking Form Heading', () => {
    render(<BrowserRouter><App/></BrowserRouter>);
    const bookingFormLink = screen.getByTestId("booking")
    fireEvent.click(bookingFormLink)
    const h1 = screen.getByText("Reserve Your Table");
    expect(h1).toBeInTheDocument();
})

test('initializeTimes', () => {
     const input = screen.queryAllByTestId("time");
     setTimeout(() => {
        expect(input).toBeGreaterThan(0);
     },2000)
})

test('updateTimes', () => {
   setTimeout(() => {
    const date = screen.queryAllByTestId("date")
    fireEvent.change(date, {target: {value: '2020-05-12'}})
    const time = screen.queryAllByTestId("input");
    expect(time).toBeGreaterThan(0);
   },2000)

})

test('Send a reservation', () => {
    setTimeout(() => {
        const date = screen.queryAllByTestId("date");
        fireEvent.change(date, {target: {value: '2020-05-12'}})
        const time = screen.queryAllByTestId("time");
        fireEvent.change(time, {target: {value: '17:00'}})
        const numberOfGuests = screen.queryAllByTestId("guests")
        fireEvent.change(numberOfGuests, {target: {value: '5'}})
        const occasion = screen.queryAllByTestId("occassion")
        fireEvent.change(occasion, {target: {value: 'Birthday'}})
        const submit = screen.getByRole("input");
        fireEvent.click(submit)
        const feedback =  screen.getByRole("paragraph");
        expect(feedback).toHaveValue("Successfully Reserved a table")
    })
});
