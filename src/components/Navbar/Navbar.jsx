import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>🅱️ig Chungus</h1>
        <div className="info-bar">
          <p className="info-item">🅱️chungus@🅱️ollege.🅱️arvard.🅱️du</p>
        </div>
        <div className="info-bar">
          <Link
            className="info-link"
            to={{ pathname: "https://example.org/" }}
            target="_blank"
          >
            example.org
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://example.net/" }}
            target="_blank"
          >
            example.net
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://example.edu/" }}
            target="_blank"
          >
            example.edu
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/about" }}>
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/experience" }}>
            Experience
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/projects" }}>
            Projects
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/feeling-lucky" }}>
            Feeling Lucky?
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/feeling-zany" }}>
            Feeling Zany?
          </Link>
        </div>
      </div>
    </>
  );
}
