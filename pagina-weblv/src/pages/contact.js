import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <div class="contact">
              <h1>Contáctanos</h1>

      <div class="form">
        <form class="login-form">
          <input type="text" placeholder="Nombre Completo" />
          <input type="password" placeholder="Email" />
          <label class="password"></label>
          <textarea
            rows="8"
            placeholder="Mensaje"
          ></textarea>
          <button>Enviar</button>
        </form>

      </div>
    </div>
  );
}

export default Contact;