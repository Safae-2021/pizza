import React from "react";
import Contacts from "../components/Contact";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

export default function Contact(){
    return(
        <div>
            <Contacts/>
            <Cart/>
            <Footer/>
        </div>
    )
}