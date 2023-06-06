// React imports
import {BrowserRouter, Route, Routes}  from "react-router-dom"

// Pages
import Home from "./pages/home";
import Registration from './pages/Registration'
// import LogIn from "./pages/logIn";
// import SignUp from "./pages/signUp";

// Styles
import { ThemeProvider } from "@mui/material/styles";
import Theme from './components/theme/Theme'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={Theme}>
        <BrowserRouter>
            <Routes>
                {/* <Route index element={<LogIn/>} /> */}
                {/* <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/log-in' element={<LogIn/>}/>                    */}
                <Route path='/' element={<Home/>}/>
                <Route path='/signup' element={<Registration/>}/>                   
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
