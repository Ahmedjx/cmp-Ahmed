import "./../compooit/Expinsfrom.css"; // Consider renaming the CSS file for clarity
import { useState } from "react";

const ExpenseForm = () => {
  //   const [userInput, setUserInput] = useState({
  //     // enterTitle: "",
  //     // enterAmount: "",
  //     // enterDate: "",
  //   });
  const [enterTitle, setTitle] = useState("");
  const [enterAmount, setAmount] = useState("");
  const [enterDate, setDate] = useState("");

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });
    setTitle(event.target.value);
    //       setUserInput((prevState) => {
    //         return { ...prevState, enterTitle: evevnt.target.value };
    //       });
  };

  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enterAmount: event.target.value,
    // });
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enterDate: event.target.value,
    // });
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Prevents page refresh
    // Handle form submission logic here, e.g., sending data to a server or updating state
    console.log(userInput);
    // Reset the form if needed
    setUserInput({
      enterTitle: "",
      enterAmount: "",
      enterDate: "",
    });
  };
  const inputchanghandler = (ident, value) => {
    if ((ident = "Title")) {
      setTitle(value);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls"></div>
      <div className="new-expense_control">
        <label>Title</label>
        <input type="text" value={enterTitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense_control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enterAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense_control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2024-08-06"
          value={enterDate}
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
