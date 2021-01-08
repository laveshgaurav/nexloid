import React from "react";
import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <React.Fragment>
      <span>
        <a
          href="https://www.facebook.com/nexloid/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
      </span>
      <span>
        <a
          href="https://www.linkedin.com/company/nexloid/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </span>
      <span>
        <a
          href="https://www.youtube.com/channel/UCYm8jY9S-fjXMkJyiYAeYpw/featured"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-youtube-play"></i>
        </a>
      </span>
    </React.Fragment>
  );
}

export default SocialMedia;
