import React from "react";

class Reach extends React.Component {
  render() {
    return (
      <div className="timeline spacer-map">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-bg-12">
              <div className="story-text">
                <div className="heading">
                  <h2>Our Reach</h2>
                </div>
                <p>
                  AMI Sansthan is operating in tribal dominated region of
                  Udaipur, Chittorgarh and Banswara districts of southern
                  Rajasthan <b>mainly on the aspects of awareness,</b>{" "}
                  <b>linkages and fight for rights.</b>
                </p>
                <div className="row vdivide spacer">
                  <div className="stories" id="stories">
                    <div className="col-md-4 col-sm-4">
                      <h2 className="our-reach">9+</h2>
                      <h4>Tehsil</h4>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <h2 className="our-reach">50+</h2>
                      <h4>Projects</h4>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <h2 className="our-reach">98+</h2>
                      <h4>villages &amp; slums</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img src="/images/Map.png" alt="Rajasthan political map" className="bt-wr" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reach;
