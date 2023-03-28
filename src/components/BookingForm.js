import { useState } from "react";
export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [state, setState] = useState({
    date: "",
    time: availableTimes[0],
    guests: 1,
    occasion: "Birthday",
  });

  const [validationErrors, setValidationErrors] = useState({
    dateValidationMessage : "",
    guestsValidationMessage : ""

  })

  const onFormInputChange = ({ target }) => {
    switch (target.id) {
      case "res-time":
        setState((prev) => {
          return { ...prev, time: target.value };
        });
        break;
      case "res-date":
        setState((prev) => {
          return { ...prev, date: target.value };
        });
        dispatch({ date: new Date(target.value) });
        break;

      case "guests":
        setState((prev) => {
          return { ...prev, guests: target.value };
        });
        break;
      case "occasion":
        setState((prev) => {
          return { ...prev, occasion: target.value };
        });
        break;

      default:
        console.log(`id ${target.id}, value: ${target.value}`);
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!state.date || !state.guests || !state.time || !state.occasion) {
      valid = false;
    }

    console.log(valid ? "form Submitted!" : "oh no, you have an error");

    if (valid) {
      submitForm(state);
    }
  };


  const onBlur = ({ target }) => {

    if (!target.value) {
      if (target.id === "res-date") {
        setValidationErrors(prev => {
            return {...prev, dateValidationMessage : "Please select a reservation date"}
        }) 
      }
    }
    else{
        if (target.id === "res-date") {
            setValidationErrors(prev => {
                return {...prev, dateValidationMessage : ""}
            }) 
        }

    }
  };

  return (
    <>
      
      <form className="booking-form" onChange={onFormInputChange} onSubmit={onSubmit}>
      <h2>Book Now</h2>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={state.date}
          onChange={onFormInputChange}
          required
          onBlur={onBlur}
        />
        <span className="validation-error">{validationErrors.dateValidationMessage}</span>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={state.time} onChange={onFormInputChange}>
          {availableTimes.map((item) => (
            <option key={item}>{item}</option>
          ))}
          {/* <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option> */}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="0"
          min="0"
          max="10"
          id="guests"
          value={state.guests}
          onChange={onFormInputChange}
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={state.occasion}
          onChange={onFormInputChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          type="submit"
          value="Make Your reservation"
          onChange={onFormInputChange}
        />
      </form>
    </>
  );
}
