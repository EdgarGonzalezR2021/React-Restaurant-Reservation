import React from "react";
import "../style/booktable.css";
import emailjs from "emailjs-com";

export default function Booktable() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "GMAIL",
        "template_njzedwp",
        e.target,
        "user_3SQGDv5jX5tRGXUoi3mMD"
      )
      .then(
        (result) => {
          alert(
            " You have successfully reserved a table, let us shortly welcomming You..!"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <section id="book-a-table" class="book-a-table">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Reservaciones</h2>
          <p>Reserva una mesa</p>
        </div>

        <form
          action="forms/book-a-table.php"
          method="post"
          role="form"
          class="php-email-form"
          data-aos="fade-up"
          data-aos-delay="100"
          onSubmit={sendEmail}
        >
          <div class="row">
            <div class="col-lg-4 col-md-6 form-group">
              <input
                type="text"
                name="name"
                class="form-control"
                id="name"
                placeholder="Tu Nombre"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Tu Email"
                data-rule="email"
                data-msg="Please enter a valid email"
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="text"
                class="form-control"
                name="phone"
                id="phone"
                placeholder="Tu Telefono"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="text"
                name="date"
                class="form-control"
                id="date"
                placeholder="Fecha"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="text"
                class="form-control"
                name="time"
                id="time"
                placeholder="Hora"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="number"
                class="form-control"
                name="people"
                id="people"
                placeholder="# de personas"
                data-rule="minlen:1"
                data-msg="Please enter at least 1 chars"
              />
              <div class="validate"></div>
            </div>
          </div>
          <div class="form-group mt-3">
            <textarea
              class="form-control"
              name="message"
              rows="5"
              placeholder="Mensaje"
            ></textarea>
            <div class="validate"></div>
          </div>
          <div class="mb-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">
              Your booking request was sent. We will call back or send an Email
              to confirm your reservation. Thank you!
            </div>
          </div>
          <div class="text-center">
            <button type="submit">Reservar</button>
          </div>
        </form>
      </div>
    </section>
  );
}
