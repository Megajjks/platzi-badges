import React from 'react'
import '../components/styles/PageError.css';
import '../pages/style/Home.css'

function PageError(props) {
  return (
    <div className="Home">
      <div className="PageError">❌{props.error.message}😱</div>;
    </div>
  );
}

export default PageError;