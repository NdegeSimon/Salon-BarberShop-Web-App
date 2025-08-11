import React, { useEffect, useState } from "react";

function Header({ userName, profileImage }) {
  const [dateTime, setDateTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header style={styles.header}>
      {/* Left Side: Greeting + Profile */}
      <div style={styles.left}>
        <img
          src={profileImage}
          alt="Profile"
          style={styles.profileImage}
        />
        <div>
          <h2 style={styles.greeting}>Hello, {userName} 👋</h2>
          <p style={styles.date}>
            {dateTime.toLocaleDateString()} | {dateTime.toLocaleTimeString()}
          </p>
        </div>
      </div>

      {/* Right Side: Search Bar */}
      <div style={styles.right}>
        <input
          type="text"
          placeholder="Search..."
          style={styles.searchInput}
        />
      </div>
    </header>
  );
}

// Inline styles for red and black theme
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "black",
    color: "white",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  profileImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "10px",
    border: "2px solid red",
  },
  greeting: {
    margin: "0",
    color: "red",
  },
  date: {
    margin: "0",
    fontSize: "0.9rem",
    color: "white",
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    padding: "5px 10px",
    borderRadius: "20px",
    border: "1px solid red",
    backgroundColor: "black",
    color: "white",
    outline: "none",
  },
};

export default Header;
