
import { useState } from "react";
import ExpenseContainer from "./components/ExpenseContainer";
import NavBar from './components/NavBar'
import Login from './components/Login'
import { expenseData } from "./data";

// data:
// date: new Date().toLocaleDateString(),

export default function Main() {
  const [data, setData] = useState(expenseData);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    document.cookie = "loggedIn=false"; 
    setLoggedIn(false);
  }

  return (
    <main>
      {
        loggedIn ? (
            <>
                <NavBar handleLogout={handleLogout}/>
                <ExpenseContainer data={data} setData={setData} />
            </> )
            : 
            <Login  setLoggedIn={setLoggedIn}/> 
      } 
    </main>
  );
}
