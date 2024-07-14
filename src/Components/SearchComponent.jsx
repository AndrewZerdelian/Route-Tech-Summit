import React from "react";

export default function SearchComponent() {
  return (
    <div className="container p-5">
      <form className="d-flex justify-content-center w-100 ">
        <input
          type="text"
          placeholder="Search"
          className="w-50 rounded-4"
        ></input>
        <button className="btn btn-danger"> Search </button>
      </form>
    </div>
  );
}
