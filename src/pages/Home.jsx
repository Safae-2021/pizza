import React from "react";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import { Outlet } from "react-router-dom";

export default function Home() {
    return (
        <div>

            {/* <HeroSection/> */}
            <Layout />
            <Outlet />
            <Footer />
        </div>
    )
}