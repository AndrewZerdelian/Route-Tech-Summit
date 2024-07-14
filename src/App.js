import React from "react";
import NavBar from "./Components/NavBar";
import SearchComponent from "./Components/SearchComponent";
import Table from "./Components/Table";
export default function App() {
  return (
    <div>
      <NavBar />
      <SearchComponent />
      <Table />
    </div>
  );
}
