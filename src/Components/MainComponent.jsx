import React, { useState } from "react";
import Data from "../Data/Data";

export default function MainComponent() {
  const [Search, SetSearch] = useState("");

  return (
    <div className="container p-5">
      <form className="d-flex justify-content-center w-100">
        <input
          type="search"
          name="search"
          onChange={(Event) => SetSearch(Event.target.value)}
          value={Search}
          placeholder=" Search by Name / Date Or Amount"
          className="w-75 rounded-4 p-3"
        />
      </form>
      <div className="d-flex justify-content-center pt-5">
        {Search ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Transaction ID</th>
                <th scope="col">Name</th>
                <th scope="col">Customer ID</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Sub/Day</th>
              </tr>
            </thead>
            <tbody>
              {Data.transactions
                .filter((Filter) => {
                  const customer = Data.customers.find(
                    (index) => index.id === Filter.customer_id
                  );
                  const LowerCasing = Search.toLowerCase();
                  const nameMatch = customer?.name
                    .toLowerCase()
                    .includes(LowerCasing);
                  const dateMatch = Filter.date
                    .toLowerCase()
                    .includes(LowerCasing);
                  const amountMatch = Filter.amount
                    .toString()
                    .toLowerCase()
                    .includes(LowerCasing);

                  return nameMatch || dateMatch || amountMatch;
                })
                .map((Item) => {
                  const Customer = Data.customers.find(
                    (index) => index.id === Item.customer_id
                  );
                  const sameDayTransactions = Data.transactions.filter(
                    (trans) =>
                      trans.customer_id === Item.customer_id &&
                      trans.date === Item.date
                  );
                  const subtotal =
                    sameDayTransactions.length > 1
                      ? sameDayTransactions.reduce(
                          (acc, t) => acc + t.amount,
                          0
                        )
                      : null;
                  return (
                    <tr key={Item.id}>
                      <th scope="row">{Item.id}</th>
                      <td>{Customer?.name}</td>
                      <td>{Item.customer_id}</td>
                      <td>{Item.date}</td>
                      <td>{Item.amount}</td>
                      <td>{subtotal}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Transaction ID</th>
                <th scope="col">Name</th>
                <th scope="col">Customer ID</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {Data.transactions.map((Item) => {
                const Customer = Data.customers.find(
                  (cust) => cust.id === Item.customer_id
                );
                return (
                  <tr key={Item.id}>
                    <th scope="row">{Item.id}</th>
                    <td>{Customer?.name}</td>
                    <td>{Item.customer_id}</td>
                    <td>{Item.date}</td>
                    <td>{Item.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
