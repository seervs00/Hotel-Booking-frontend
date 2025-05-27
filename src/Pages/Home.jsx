import React from "react";
import Hero from "../Componants/Hero";
import FeaturedDestinstion from "../Componants/featuredDestinstion";
import { ExclusiveOffers } from "../Componants/ExclusiveOffers";
import { Testimonial } from "../Componants/Testimonial";
import NewsLetter from "../Componants/NewsLetter";

const Home  = () => {
    return (
    <>
    <Hero/>
    <FeaturedDestinstion/>
    <ExclusiveOffers/>
    <Testimonial/>
    <NewsLetter/>
    </>
    )
};

export default Home;
