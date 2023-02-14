import React from "react";

import {mainPage} from "../components/layout/ImageData.js"
import Contact from "./Contact";
import FadeCarousel from "../components/layout/FadeCarousel";
import List from "./List";
import Reach from "./Reach";

import "./Home.css";

function Home() {
  return (
    <section className="reach-marg display-none">
      <div className="container">
        <div className="timeline spacer-map">
          {/* <div className="row"> */}
          {/* <div className="col-md-7"> */}
          <p>
            AMI is an organization of youth activists of Udaipur
            (Rajasthan-India) formed in order to build a healthy creative and
            progressive view towards life as opposed to the widely spread
            pessimism, consumerism, non-scientific way of living & declining
            value system. AMI is an organization of young social activists
            formed in 1996. Since its inception it has been actively engaged in
            the social development and socio-cultural renaissances of the tribal
            and non –tribal exploited and deprived people of southern Rajasthan
            through literary and various creative performing arts along with
            committed social work. AMI is a group of committed youth who are
            innovative & experimental. Group is working for folk forms,
            traditional arts and rare theatre forms in tribal field of southern
            Rajasthan. AMI has organized research work, training programs,
            theatre workshops and produced various plays along with the work for
            Health issues like HIV/AIDS & RCH, Women Empowerment especially in
            weaker sections of the society, Eco-friendly Environment activity,
            Consumer Awareness program and programs for promotion of Rajasthani
            language through literary event and various workshop/play for
            De-addition such as same.<br/>
            <a href="/about">Read more</a>
          </p>
          {/* </div>
          </div> */}
        </div>
      </div>
      <div className="container-carousel">
        <FadeCarousel data={mainPage}/>
        <List />
      </div>
      <Reach />
      <Contact />
    </section>
  );
}

export default Home;
