import {render, screen, waitFor, within} from '@testing-library/react';
import bookingForm from "./components/BookingForm";
import BookingForm from "./components/BookingForm";
import * as user from "@testing-library/user-event/dist/type";


describe("Feedback form", () => {
  const onSubmit = jest.fn();

  const setup = () => render(<BookingForm onSubmit={onSubmit}/>);
  beforeEach(() => {
    onSubmit.mockClear();
  })
  it('onSubmit is called when all fields pass validation', function () {
    user.type(getNumberOfPeople(), '2');
    user.type(getDate(), '02/16/2023');
    user.type(getTime(), '18:00');
    user.type(getLastName(), 'Costa')
    user.type(getFirstName(), 'Vanessa');
    user.type(getPhoneNumber(), '935921548')

    clickSubmitButton();
    await waitFor(()=> {
      expect(onSubmit).toHaveBeenCalledWith({
        numberOfPeople: '2',
        date: '02/16/2023',
        time: '19:00',
        firstName: 'Vanessa',
        lastName: 'Costa'
      })
    })
  });


})

function getNumberOfPeople(){
  return screen.getByRole('spinbutton', {
    name: /number of people/i
  })
}

function getDate(){
  return screen.getByLabelText(/date/i);
}

function getTime(){
  return screen.getByRole('combobox', {
    name: /time/i
  });
}
function getFirstName() {
  return screen.getByRole('textbox', {name: /first name/i});
}

function getLastName(){
  return screen.getByRole('textbox', {
    name: /last name/i
  });
}

function getPhoneNumber(){
  return screen.getByRole('textbox', {
    name: /phone number/i
  })
}


