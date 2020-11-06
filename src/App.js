import React from "react";
import FirstComponent from "./components/FirstComponent";
import UserCard from "./components/UserCard";
import SecondComponent from "./components/SecondComponent";
import "./App.css";

function App() {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <UserCard />
    </div>
  );
}

export default App;
