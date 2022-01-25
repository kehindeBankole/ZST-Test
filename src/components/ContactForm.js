import React, { useState } from "react";
import "./Contact.scss";

function ContactForm(props) {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  function handle(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <div className="contact-modal" onClick={props.close}>
      <div className="box">
        <input value={user.name} name="name" onChange={handle} />
        <input value={user.password} name="password" onChange={handle} />
        <button>send message</button>
      </div>
    </div>
  );
}

export default ContactForm;
