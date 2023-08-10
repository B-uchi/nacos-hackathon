import React, { useEffect, useState } from "react";
import "./hero.css";
import HeroArticle from "./articlecomponent/HeroArticle";
import pic1 from "../../assets/hero/heroarticle1.jpg";
import pic2 from "../../assets/hero/heroarticle2.jpg";
import pic3 from "../../assets/hero/heroarticle3.jpg";
import menu1 from "../../assets/hero/trending/trending_2.jpg";
import menu2 from "../../assets/hero/trending/trending_4.jpg";
import menu3 from "../../assets/hero/trending/trending_1.jpg";
import menu4 from "../../assets/hero/trending/trending_3.jpg";
import menu5 from "../../assets/hero/trending/trending_5.jpg";
const pics = [menu1, menu2, menu3, menu4, menu5];

import AsideMenuContent from "./asidecontent/AsideMenuContent";

const HeroSection = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 425px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 425px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <section id="hero-section">
      <div className="hero-left">
        <div className="hero-left-top">
          <div className="box">JUST IN</div>
          <p>NACOS UNN just concludes it's CORPORATE Monday...</p>
        </div>
        <div className="hero-left-middle">
          <HeroArticle
            hero={true}
            tag={"TECHNOLOGY"}
            title={"NACOS virtual hackathon"}
            duration={"5 min read"}
            date={"27th June 2023"}
            pic={pic1}
            id={matches && true}
          />
          <HeroArticle
            hero={true}
            tag={"VEHICLES"}
            title={"Volvo releases killer SUV"}
            duration={"3 min read"}
            date={"20th May 2023"}
            pic={pic2}
            id={matches && true}
          />
        </div>
        <div className="hero-left-bottom">
          <HeroArticle
            hero={true}
            tag={"SPACE"}
            title={"Zoom off into the nexus"}
            duration={"10 min read"}
            date={"21th June 2023"}
            pic={pic3}
            id={true}
          />
        </div>
      </div>
      <div className="hero-right">
        <aside>
          <h2>Trending News</h2>
          <div className="aside-menu">
            {pics.map((pic) => (
              <AsideMenuContent pic={pic} />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HeroSection;
