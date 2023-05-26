// React imports
import {BrowserRouter, Route, Routes}  from "react-router-dom"

// Pages
import Home from "./pages/home";
// import LogIn from "./pages/logIn";
// import SignUp from "./pages/signUp";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                {/* <Route index element={<LogIn/>} /> */}
                {/* <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/log-in' element={<LogIn/>}/>                    */}
                <Route path='/home' element={<Home/>}/>                   
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
