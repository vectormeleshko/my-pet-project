import { useState } from "react";
import NavbarPreview from "./components/NavbarPreview.jsx";
import NavbarControls from "./components/NavbarControls";
import "./App.css";

function App() {
  const [links, setLinks] = useState(["Home", "About", "Services"]);
  const [isMobile, setIsMobile] = useState(false);

  const addLink = (text) => {
    if (!text.trim()) return;
    setLinks([...links, text]);
  };

  const removeLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Responsive Navbar Builder</h1>

      <NavbarControls
        addLink={addLink}
        toggleMobile={() => setIsMobile(!isMobile)}
        isMobile={isMobile}
      />

      <NavbarPreview
        links={links}
        removeLink={removeLink}
        isMobile={isMobile}
        setLinks={setLinks}
      />
    </div>
  );
}

export default App;