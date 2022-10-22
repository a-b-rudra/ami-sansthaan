import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import { About } from "./pages/About";
import Contact from "./pages/Contact";
import { Activities } from "./pages/Activities";
import { Articles } from "./pages/Articles";
import NavBar  from "./components/layout/Navbar";
import Social from "./components/layout/Social";
import CarouselFadeExample from "./pages/Carousel.js";


const App = () =>  {
  const imgsrc = [
    {
      src: "https://lh3.googleusercontent.com/aa8rDaliv1PBev6YixBe_Z65bixJEs-zLkn4sz99qLcuEL0fL_z-R4IjfYe_tNFVhCRaDAdvybh1NgM7hGYjBgXascZ8zcCSsn5Gcs89uVSh_EByX27w027-qIoJvWerrma28hWXo2YtkHVJ9LHOv4AzKyWk_5ggvSHxtts9V36k0kbOUEWXekG8rPl6eUew7KYx3ITYY-pberGTcMoXPJKxnIDjMsj04XrbnoVm1YzToNTIOEsfIamVNJ9W9qJsk9OrsV5eRRHacwWKDd4WgHwChCItw5z5_i3LbKal1g9zWqA77oVYgZmJssNLdqe7h4PHHb4mP9gmiLUOR3Hwwlv5qTF2YJf57FE3nHKBCZN7Tq0JYiGayWPBNDe5biYf8frrX_crARBG9fsF6CC2nqbZdhnzZVWOM3ATTAeAArOrte69WEHrF5uEGGRY-IQFX7lEJLAOiQ1uyXdinmcktCpW1DZiBv6dGsniuiyOQFZvFXIVCR-y22PQfh4RNr7SXsbacUTSSI9rrq0iVqfWZxk4jAn7fTkXjSIno72UgKnsTH2XpZLUv8xDEg921P4SH-tzyCqZ6WmYLEsZTu2iPdzO7nzeFZX4ONuwgRi332-SrIPaONnT8xLnQ8_0KYNrvQs5PWhyNu6WYnR3k1XpM5nb8k6cq8SPsvmwz8cz2-EJUloIKCmDOxFwHsQWb7Ioy-AVfQcrQ_W7zEB8MOC7jXZU5lqVOfXansiRqKDOxjijCBiF1VnspZcI3OU9breX14U9fNjTEqRPuJ6Rsdgkzq-67Rw71tFmiYNF8mqgnd5FaDitFF0Anv3wC4viYI16f_PukxGtAs--PNwjB-IeLuyO7DQYy3pV_S1YG1ltlLflwPRwsXIpPNbGujIRIa40XuCauSEDNScDJaosRY8lKpv-6TQc1yaY0aT-oHjxTMKgC9qSa2nL3UQSJzHJK34KI5jxhQVvLPfkS8oZgsFjDKDAyp8kQYyoCYQV6W6M0x1h3ldPH_Flq-2-=w1351-h649-no?authuser=1",
      caption: "Statue of Shivaji Maharaj at Mumbai Airport",
    },
    {
      src: "https://lh3.googleusercontent.com/F7CaoZD9RqIBk5Htf2AqF5FNJuw13kJrcIwIZE-czKPRicWNh9K0P5FfMpewIfPskr3vbSbw70-CVug6FrgoJm_XhsajT5rVICJdj3bNaiIb_KhN4NXzmxRim6QPb8yDItzS0M0s_1zTDyTB6HxCid8_vBnLqnsKaM78WwiyjTBujuXYER-JJmU9uhOlDS7GdZP2Y42Ut8-RsVIfSJgDF5lLjjl3q2tCxKbejpHaiSwGewS1X7jCdFMEs9nyWCNvhRW0VaWsCM3m29njMPLBDeVrVDznc2yR5obNo-fp1Izb1OQ_yUs_T4XQmyKZWN9m5awSwDHxA2xecaL4wtyAbFeKjI95tGS5I8qo71hiEiTTapXrbhvJSWwj_16WOyWpMFX-D7H89-iNFiY_UD1MFOUKijiHReEW49N_v8DRXqrmPfg7AU-6ujcyC6Fp7aXF6WDMZiWtdlKsMwTXibl8BUomsxkd-t25057K8Kk2TzV5bP5hV6HpeSMkR20wDr2EaZplN27tKtYsFaPGwDI0ah_1j1DbsIp-NKWF0_aDwciIJGx_0uT2BAuMoUX8lhAp3BI4YgwhjfpPaARgoRoUwiW7TLUmMNVo2jfYGAL8xtW8uOzhrYxdhzO5sLx8PpQK_G83tGasSxHE9o7FOZuZbwTIzDZkgxHKGp6nIEon089dJfeFs7_1AY20sKWKazI_OLusQwu5vpIrzVL32BVBcaRrxA7cY20oAXjD-mBVvOs3oP5LMIkr1UP4z-6c3yYmsz-Dm7YHG0lsJETzQ3vpAXSmyQYMhKVRogYcf3eX5rRqRFgv5SQMaYZ7ne1v18-yxrcAaGk1g4eKRaGBFoJ_D14NihYMRiadscz7JSD3TR8pBBSbjx3885WG91Q1PBcDYCSsJPa0Qiq7dr76YQYVHZnlei7cw3L-1SAJeH1mf9ockYY3irNghy-pMBC2JeEo-xx7umKAC7qU2dRfXKCfSmagR-YCuZXl-CwuujHftUkMYzPF088GbKvm=w1351-h649-no?authuser=1",
      caption: "Sunset on the Ganges",
    },
    {
      src: "https://lh3.googleusercontent.com/oOslE-3sDgGgYCLvprpdoVXfXae-FElJWTAy_yo1ViqMv270e2raTi_ssflxGQxyU83UNe7eT3LtCz3FGp_CTpz6y6PGvzbpupWHT49EBbPYx7VSRKaah0BUt66GtlC1fNNQw5k-VA9LUTA-AipB1GTnz5kWgngT3Ib2aPsCn_KI0K74vI05GvcPcVH-CVMesBuX5gA51Z7x4yRJV8KKbGJP7tDXCMLbyt5l2e8FwSL8s9RJtM9FQzi14TgcSR-BsKU0xvgrL9cUufCe8eqr5PWd7raqJEV1GDLn_hsX-UMFd-XjtP_9L5KJ8yteDs7kNHqMqub2Jf3TEdnWtW8JVCvbMzirdtufmfKgwHA2GGBJnCqTEfDdzKEem86t02exWkAZkIEGfapNqkQeJ88ZQPvJzwig5OX0OZY8wEZ6gqMcd4zyI0aIjlPONcXqPhqqhM3cBxWPjC6pP-D4GoTo--EvIWrNGcvOdy6S_YLTX7rrELb8wrpgCdRP3eF7gmkHvL63n_TyHr21tDP2ub8u_XCsN0SK3OwIm_5FGXTg5ZhAlHtCMVgCXmkFdOaVQXSWcdNudQDIB8Qgcvz0VFPAXuYLOtd9qADcgu6GrtaXeK6vmdtoFis-edF88kdn35IPgTZtcgew292pjdTER3-t-TdeGF9fsnuIwVgu0KeQ4wsuPR0lcREs65C0CiuSX2Cn4EzLrdeOQmK1QHbtCqrRq37hscXJKaRlocTZOjJRdH4Rj074W56H_pInrropN_erv-GY0iIZvaE19b9iiWgKT_mcChmq-sJtnOyvzpkNsc_VZroZlxAEWQtzK-5r-rSBhjo8bWNInY09uLNnj5gX2v1vzB5E7ZkPhM0BxpjTW-yfjGq65XyjIjxGA8a63tXfHZnueeLDlJvMTCh-PSzhcQ9Ph18xRCotG76rowWAGAuSLoDEZveOpE8WUa5UwTvpQLKtGOMxQgyyFGre9SxDKva5x5t3_fP4BlenOsjTfPFhnkesZ7UDAfwB=w1351-h649-no?authuser=1",
      caption: "A sleepy kitten taking a nap",
    },
    {
      src: "https://lh3.googleusercontent.com/aa8rDaliv1PBev6YixBe_Z65bixJEs-zLkn4sz99qLcuEL0fL_z-R4IjfYe_tNFVhCRaDAdvybh1NgM7hGYjBgXascZ8zcCSsn5Gcs89uVSh_EByX27w027-qIoJvWerrma28hWXo2YtkHVJ9LHOv4AzKyWk_5ggvSHxtts9V36k0kbOUEWXekG8rPl6eUew7KYx3ITYY-pberGTcMoXPJKxnIDjMsj04XrbnoVm1YzToNTIOEsfIamVNJ9W9qJsk9OrsV5eRRHacwWKDd4WgHwChCItw5z5_i3LbKal1g9zWqA77oVYgZmJssNLdqe7h4PHHb4mP9gmiLUOR3Hwwlv5qTF2YJf57FE3nHKBCZN7Tq0JYiGayWPBNDe5biYf8frrX_crARBG9fsF6CC2nqbZdhnzZVWOM3ATTAeAArOrte69WEHrF5uEGGRY-IQFX7lEJLAOiQ1uyXdinmcktCpW1DZiBv6dGsniuiyOQFZvFXIVCR-y22PQfh4RNr7SXsbacUTSSI9rrq0iVqfWZxk4jAn7fTkXjSIno72UgKnsTH2XpZLUv8xDEg921P4SH-tzyCqZ6WmYLEsZTu2iPdzO7nzeFZX4ONuwgRi332-SrIPaONnT8xLnQ8_0KYNrvQs5PWhyNu6WYnR3k1XpM5nb8k6cq8SPsvmwz8cz2-EJUloIKCmDOxFwHsQWb7Ioy-AVfQcrQ_W7zEB8MOC7jXZU5lqVOfXansiRqKDOxjijCBiF1VnspZcI3OU9breX14U9fNjTEqRPuJ6Rsdgkzq-67Rw71tFmiYNF8mqgnd5FaDitFF0Anv3wC4viYI16f_PukxGtAs--PNwjB-IeLuyO7DQYy3pV_S1YG1ltlLflwPRwsXIpPNbGujIRIa40XuCauSEDNScDJaosRY8lKpv-6TQc1yaY0aT-oHjxTMKgC9qSa2nL3UQSJzHJK34KI5jxhQVvLPfkS8oZgsFjDKDAyp8kQYyoCYQV6W6M0x1h3ldPH_Flq-2-=w1351-h649-no?authuser=1",
      caption: "Statue of Shivaji Maharaj at Mumbai Airport",
    },
  ];
    return (
      <React.Fragment>
        <NavBar/>
        <Social/>
        <CarouselFadeExample data={imgsrc} />
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/activities" component={Activities} />
              <Route path="/articles" component={Articles} />
            </Switch>
        </Router>
      </React.Fragment>
    );
}

export default App;
