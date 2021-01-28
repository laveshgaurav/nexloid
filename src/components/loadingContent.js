import React from 'react';

function LoadingContent(props) {
  return (
  <div className="PageLoader">
    <h4>{props.loaderText}</h4>
  </div>
  )
}

export default LoadingContent;