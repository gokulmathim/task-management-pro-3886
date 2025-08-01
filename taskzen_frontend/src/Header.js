import React from "react";
import "./Header.css";

// PUBLIC_INTERFACE
/**
 * Modern minimalistic header with logo on the left and avatar on the right.
 * @component
 * @returns {JSX.Element} The header component for TaskZen.
 */
function Header() {
  return (
    <header className="tz-header">
      <div className="tz-header__logo">
        {/* Logo text for TaskZen */}
        <span className="tz-header__logo-text">TaskZen</span>
      </div>
      <div className="tz-header__spacer" />
      <div className="tz-header__avatar">
        {/* Dummy user avatar (could be replaced with user image in future) */}
        <span className="tz-header__avatar-img" aria-label="User">👤</span>
      </div>
    </header>
  );
}

export default Header;
