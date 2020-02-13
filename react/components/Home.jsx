import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="wrapper">
      <h1>Homepage</h1>
      <Link className="button" to="/settings">Start </Link>
    </div>
  );
}

export default Home;