import { useState } from "react";

function NavbarPreview({ links, removeLink, isMobile, setLinks }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [dragIndex, setDragIndex] = useState(null);

  return (
    <div className={`preview ${isMobile ? "mobile" : "desktop"}`}>
      <nav className="navbar">
        <div className="logo">MyLogo</div>

        {isMobile ? (
          <>
            <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>

            {menuOpen && (
              <div className="mobile-menu">
                {links.map((link, index) => (
                  <div
                    key={index}
                    className="nav-item"
                    draggable
                    onDragStart={() => setDragIndex(index)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => {
                      const newLinks = [...links];
                      const draggedItem = newLinks.splice(dragIndex, 1)[0];
                      newLinks.splice(index, 0, draggedItem);
                      setLinks(newLinks);
                      setDragIndex(null);
                    }}
                  >
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
              <div
                key={index}
                className="nav-item"
                draggable
                onDragStart={() => setDragIndex(index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => {
                  const newLinks = [...links];
                  const draggedItem = newLinks.splice(dragIndex, 1)[0];
                  newLinks.splice(index, 0, draggedItem);
                  setLinks(newLinks);
                  setDragIndex(null);
                }}
              >
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