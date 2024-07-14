import React from "react";
import Data from "../Data/Data";

export default function Table() {
  return (
    <div className="d-flex justify-content-center container pt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {Data.transactions.map((transaction) => {
            const customer = Data.customers.find(
              (cust) => cust.id === transaction.customer_id
            );
            return (
              <tr key={transaction.id}>
                <th scope="row">{transaction.id}</th>
                <td>{customer?.name}</td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
