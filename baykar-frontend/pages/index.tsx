import Link from "next/link";
import React from "react";
import HtmlHead from "@/components/HtmlHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Collectibles from "@/layouts/Collectibles";
import Bests from "@/layouts/Bests";
import JoinUs from "@/layouts/JoinUs";
import LoveUs from "@/layouts/LoveUs";
import Collection from "@/layouts/Collection";
import Map from "@/layouts/Map";

function Homepage() {

  return (
    <main>
      <HtmlHead title="BAYKAR Teknoloji"/>
      <Header/>
      <Collectibles/>
      <Bests/>
      <JoinUs/>
      <LoveUs/>
      <Collection/>
      <Map/>
      <Footer/>
    </main>
  );
}

export default Homepage;
