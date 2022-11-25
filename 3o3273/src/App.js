import { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "dileep" },
    { id: 2, name: "dileep2" },
    { id: 3, name: "dileep" },
    { id: 4, name: "kumar" },
    { id: 5, name: "kumar" }
  ]);
  const deleteitem = (id) => {
     let newData = data.filter(data => data.id !== id)
         setData(newData)
  }
  return (
    <div className="App">
      {data.map((item, index) => (
        //console.log(data)
        <>
          <div key={index}>
            {item.id} {item.name}
            <button  onClick={()=>deleteitem(item.id)}>
              Delete</button>
          </div>
        </>
      ))}
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
