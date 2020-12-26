import React from "react";
import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <React.Fragment>
      <span>
        <Link>
          <i className="fab fa-facebook-f"></i>
        </Link>
      </span>
      <span>
        <Link>
          <i className="fab fa-linkedin-in"></i>
        </Link>
      </span>
      <span>
        <Link>
          <i className="fab fa-twitter"></i>
        </Link>
      </span>
    </React.Fragment>
  );
}

export default SocialMedia;
