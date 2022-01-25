import React, { useState } from "react";
import ContactForm from "./ContactForm";
import "./EstateCard.scss";

function EstateCard({ item, like, color }) {
  const { location, status, desc, name, contact, price, src } = item;
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {showForm && <ContactForm close={() => setShowForm(false)} />}

      <div className="card">
        <div className="main">
          <i
            className="ri-heart-fill icon"
            style={{ color }}
            onClick={like}
          ></i>
          <h1>{location}</h1>
        </div>
        <img src={src} />
        <div className="details">
          <p>{status}</p>
          <small>{desc}</small>
          <div className="contact">
            <p>{name}</p>
            <p style={{ cursor: "pointer" }} onClick={() => setShowForm(true)}>
              {contact}
            </p>
          </div>
          <h1>{price}</h1>
        </div>
      </div>
    </>
  );
}

export default EstateCard;
