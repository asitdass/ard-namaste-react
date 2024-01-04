import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Body from "./components/Body";

const App = () => { 
return(
    <>
    <NavBar />
    <Body />
    {/* <Footer /> */}
    </>
)
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);// it renders the element heading object into the root by creating an HTML document