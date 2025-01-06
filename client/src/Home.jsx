import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
      <div className="bg-white p-4 rounded w-50">
        <h2>Welcome to the Home Page!</h2>
        <p>This is a protected page. Only logged-in users can access it.</p>
        <Link to="/login" className="btn btn-primary w-100 rounded-0">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Home;
