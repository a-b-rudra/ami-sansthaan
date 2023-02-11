import React from "react";

import "./Social.css";

class Social extends React.Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <div className="sticky-social">
          <ul className="social">
            <li className="fb">
              <a href="https://www.facebook.com">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li className="twitter">
              <a href="http://www.twitter.com">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li className="yt">
              <a href="http://www.youtube.com">
                <i className="fa fa-youtube" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Social;
