import { useState } from "react";

function NavbarPreview({ links, removeLink, isMobile }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`preview ${isMobile ? "mobile" : "desktop"}`}>
      <nav className="navbar">
        <div className="logo">MyLogo</div>

        {isMobile ? (
          <>
            <div
              className="burger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </div>

            {menuOpen && (
              <div className="mobile-menu">
                {links.map((link, index) => (
                  <div key={index} className="nav-item">
                    {link}
                    <span onClick={() => removeLink(index)}> ✕</span>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="nav-links">
            {links.map((link, index) => (
              <div key={index} className="nav-item">
                {link}
                <span onClick={() => removeLink(index)}> ✕</span>
              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavbarPreview;