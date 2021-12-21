import React, { useState } from "react";
import "./Tracker.css";

function Tracker() {
  const [transaction, setTransaction] = useState({
    title: "",
    amount: 0,
    expense: 0,
    income: 0,
    total: 0,
  });
  const [lastTrans, setLastTrans] = useState([]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setTransaction((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const resetHandler = () => {
    setTransaction((prev) => {
      return { ...prev, expense: 0, income: 0, total: 0 };
    });
  };
  const removeHandler = ({ amount, id }) => {
    setLastTrans(lastTrans.filter((item) => item.id !== id));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { income, expense, amount, total } = transaction;
    setLastTrans([
      ...lastTrans,
      {
        id: Math.floor(Math.random() * 100),
        title: transaction.title,
        amount: transaction.amount,
      },
    ]);

    if (amount > 0) {
      setTransaction((prev) => {
        return {
          ...prev,
          income: income + Number(amount),
          total: total + Number(amount),
        };
      });
    } else {
      setTransaction((prev) => {
        return {
          ...prev,
          expense: expense - Number(amount),
          total: total + Number(amount),
        };
      });
    }

    setTransaction((prev) => {
      return {
        ...prev,
        title: "",
        amount: 0,
      };
    });
  };

  return (
    <div className="wrapper tarcker">
      <h1>Expense Tracker</h1>
      <div className="tracker_Info">
        <h2>
          <i class="fas fa-coins" />
          Total: {Number(transaction.total)} JD
        </h2>
        <p>
          <i class="fas fa-arrow-up income" />
          Income:
          {Math.abs(transaction.income)} JD
        </p>
        <p>
          <i class="fas fa-arrow-down expense" />
          Expense:
          {Math.abs(transaction.expense)} JD
        </p>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <div className="items_Section">
        <h2>Last Transaction</h2>
        {lastTrans.map((item) => {
          return (
            <div className="item" key={item.id}>
              <p>{item.title}</p>
              <p>{item.amount} JD</p>
              <button onClick={() => removeHandler(item)}>
                <i className="fas fa-trash-alt remove" />
              </button>
            </div>
          );
        })}
      </div>
      <form className="tracker_Form" onSubmit={submitHandler}>
        <h3>Add new transaction</h3>
        <input
          name="title"
          type="text"
          value={transaction.title}
          placeholder="Title"
          onChange={changeHandler}
          required
        />
        <input
          name="amount"
          type="number"
          value={transaction.amount}
          placeholder="Amount (JD)"
          onChange={changeHandler}
          required
        />
        <p className="note">Positive an income,Negative an expense</p>
        <button className="tacker_btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Tracker;
