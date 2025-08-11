// SalonServices.jsx
import React from "react";

const SalonServices = ({ onBook }) => {
  const services = [
    { name: "Haircut", icon: "/icons/haircut.png" },
    { name: "Hair Coloring", icon: "/icons/coloring.png" },
    { name: "Manicure", icon: "/icons/manicure.png" },
    { name: "Pedicure", icon: "/icons/pedicure.png" },
    { name: "Makeup", icon: "/icons/makeup.png" },
  ];

  const styles = {
    section: { backgroundColor: "#000", padding: "40px 20px", textAlign: "center" },
    title: { fontSize: "2.5rem", color: "red", marginBottom: "30px" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "20px" },
    card: { backgroundColor: "#111", border: "2px solid red", borderRadius: "12px", padding: "20px", cursor: "pointer" },
    icon: { width: "60px", height: "60px", marginBottom: "10px" },
    name: { color: "white" },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Salon Services</h2>
      <div style={styles.grid}>
        {services.map((service, index) => (
          <div key={index} style={styles.card} onClick={() => onBook(service.name)}>
            <img src={service.icon} alt={service.name} style={styles.icon} />
            <p style={styles.name}>{service.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SalonServices;
