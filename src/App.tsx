import './App.css';
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SigninPage />}></Route>
      <Route path="signup" element={<SignupPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
