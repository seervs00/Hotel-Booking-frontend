import React from "react";
import Hero from "../Componants/Hero";
import FeaturedDestinstion from "../Componants/featuredDestinstion";
import { ExclusiveOffers } from "../Componants/ExclusiveOffers";
import { Testimonial } from "../Componants/Testimonial";
import NewsLetter from "../Componants/NewsLetter";
import RecommendedHotel from "../Componants/RecommendedHotel";

const Home  = () => {
    return (
    <>
    <Hero/>
    <RecommendedHotel/>
    <FeaturedDestinstion/>
    <ExclusiveOffers/>
    <Testimonial/>
    <NewsLetter/>
    </>
    )
};

export default Home;
