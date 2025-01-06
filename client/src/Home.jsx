import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">Home</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="d-flex justify-content-center align-items-center bg-light vh-100">
        <div className="bg-white p-4 rounded w-50">
          <h2>Welcome to the Home Page!</h2>
          <p>This is a protected page. Only logged-in users can access it.</p>

          <Link to="/login" className="btn btn-primary w-100 rounded-0">
            Logout
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
