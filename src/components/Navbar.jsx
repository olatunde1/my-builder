import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../assets/new-logo.png";

export default function ResponsiveNavbar({ logoSrc, logoAlt = "Logo" }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { title: "Home", to: "/" },
    { title: "Builder Types", to: "/builder-types" },
    { title: "Take Quiz", to: "/quiz", cta: true },
  ];

  const getNavItems = () => {
    if (hovered && hovered !== "Take Quiz") {
      return navItems.map(item =>
        item.title === "Take Quiz" ? { ...item, cta: false } : item
      );
    }
    return navItems;
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-row">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/" className="navbar-logo-link">
              <div className="navbar-logo-img-wrap">
                <img src={LogoImage} alt={logoAlt} className="navbar-logo-img"/>
              </div>
            </Link>
          </div>
          {/* Desktop nav */}
          <nav className="desktop-nav">
            {getNavItems().map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className={`nav-link${item.cta ? ' nav-link-cta' : ''}`}
                onMouseEnter={() => setHovered(item.title)}
                onMouseLeave={() => setHovered(null)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          {/* Mobile menu button */}
          <div className="mobile-toggle">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="mobile-toggle-btn"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile panel */}
      <div className={`mobile-panel${open ? ' open' : ''}`}>
        <div className="mobile-panel-inner">
          {getNavItems().map((item) => (
            <Link
              key={item.title}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`nav-link${item.cta ? ' nav-link-cta' : ''}`}
              onMouseEnter={() => setHovered(item.title)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        .navbar-header {
          width: 100%;
          background: #fff;
          box-shadow: 0 2px 5px rgba(0,0,0,0.08);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .navbar-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .navbar-logo-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }
        .navbar-logo-img-wrap {
          height: 48px;
          width: 150px;
          border-radius: 6px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .navbar-logo-img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
        .desktop-nav {
          display: flex;
          gap: 1.5rem;
        }
        .nav-link {
          padding: 0.25rem 1rem;
          border-radius: 24px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          color: #374151;
          background: transparent;
          transition: background 0.2s, color 0.2s;
        }
        .nav-link-cta {
          background: #144559;
          color: #fff;
          box-shadow: 0 2px 5px rgba(0,0,0,0.15);
        }
        .nav-link:hover, .nav-link:focus {
          background: #144559;
          color: #fff;
        }
        .mobile-toggle {
          display: none;
        }
        .mobile-toggle-btn {
          padding: 8px;
          border-radius: 6px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 2rem;
          color: #144559;
        }
        .mobile-panel {
          display: none;
          position: fixed;
          top: 64px;
          left: 0;
          width: 100vw;
          background: #fff;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          z-index: 100;
          transition: max-height 0.3s;
        }
        .mobile-panel.open {
          display: block;
        }
        .mobile-panel-inner {
          padding: 1.5rem 1rem 1rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        @media (max-width: 900px) {
          .navbar-logo-img-wrap {
            width: 120px;
            height: 40px;
          }
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
            align-items: center;
          }
          .mobile-panel {
            top: 56px;
          }
          .navbar-row {
            height: 56px;
          }
        }
      `}</style>
    </header>
  );
}
