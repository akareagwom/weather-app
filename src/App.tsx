// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import { Button } from "antd";
import { DatePicker } from "antd";
import NavBar from "./components/navBar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="">
      <NavBar/>
      <DatePicker />
      <Button type="primary">Primary Button</Button>
    </div>
  );
}

export default App;
