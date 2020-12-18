import React from "react";
import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <React.Fragment>
      <span>
        <Link>
          <i class="fab fa-facebook-f"></i>
        </Link>
      </span>
      <span>
        <Link>
          <i class="fab fa-linkedin-in"></i>
        </Link>
      </span>
      <span>
        <Link>
          <i class="fab fa-twitter"></i>
        </Link>
      </span>
    </React.Fragment>
  );
}

export default SocialMedia;
