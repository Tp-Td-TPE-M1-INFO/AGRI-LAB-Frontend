// React import
import {React} from "react-router-dom";
import { Typography, useMediaQuery } from "@mui/material";

// Header and Footer
import Header from "../components/Header";

// Page style
import "../styles/home.css"
import StyledButton from "../components/Button";

const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:990px)");

  return (
    <div className="home">
        <Header />
        <div className="home-main">
          <div className="home-presenter" style={isNonMobileScreens ? {height:"120vh"}: {height:"100vh"}}>
            <div className="home-normalizer">
              <div className="home-intro">
                    <Typography 
                      textAlign={"start"}
                      width={"100%"}
                      fontSize={"3rem"}
                      fontWeight={700}
                      color={"var(--white)"}
                      margin={"0.3rem 0"}>WELCOME TO AGRILAB</Typography>
                    <Typography
                      textAlign={"start"}
                      width={"100%"}
                      style={isNonMobileScreens?{fontSize:"1.5rem"}:{fontSize:"1.2rem"}}
                      fontWeight={300}
                      color="var(--white)"
                      letterSpacing={"0.2rem"}
                      marginBottom={"4rem"}>Nous sommes un service immobilier dynamique, productif et esthetique, dans lequelle vous trouverez forcement ce que vous recherchez.</Typography>
                      <div style={{ width:"100%", display:"flex",alignItems:"start", justifyContent:"start"}}>
                        <StyledButton to="/" label="GET STARTED" bg="var(--white)" fg="var(--primary-900)"/>

                      </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
