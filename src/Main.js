import "./index.css";
import ExpenseContainer from "./Expense";
import { datas } from "./data";
import { useState } from "react";
export default function Main() {
  const [data, setData] = useState(datas);
  return (
    <main>
      <ExpenseContainer data={data} setData={setData} />
    </main>
  );
}
