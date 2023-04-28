import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import styles from "./App.module.scss"
import Home from "./components/Home"

const  App = () => {
  
  return <BrowserRouter>
  
  <div className={styles.container}>
    <Routes>
      <Route path="/menu/:id" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
    </Routes>

  </div>
  
  </BrowserRouter>
}

export default App;
