import React from "react";
import ReactDOM  from "react-dom/client";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Index.css"



function App(){
    return(
        <div className="App">
        <Header />
        <Body />
        <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />)