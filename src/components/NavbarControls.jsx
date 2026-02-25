import { useState } from "react";

function NavbarControls({ addLink, toggleMobile, isMobile }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addLink(input);
    setInput("");
  };

  return (
    <div className="controls">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New menu item..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
      </form>

      <button onClick={toggleMobile} className="toggle-btn">
        Switch to {isMobile ? "Desktop" : "Mobile"} View
      </button>
    </div>
  );
}

export default NavbarControls;