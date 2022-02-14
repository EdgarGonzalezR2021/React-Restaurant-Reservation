import React from "react";
import "../style/body.css";

export default function Body() {
  return (
    <section id="body" class="d-flex align-items-center">
      <div
        class="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div class="row">
          <div class="col-lg-8">
            <h1>
              Bienvenido a <span>LA BELLA IVREA</span>
            </h1>
            <h2>Platillos gourmet desde 1980!</h2>

            <div class="btns">
              <a href="#menu" class="btn-menu animated fadeInUp scrollto">
                Nuestro Menu
              </a>
              <a
                href="#book-a-table"
                class="btn-book animated fadeInUp scrollto"
              >
                Reservar una Mesa
              </a>
            </div>
          </div>
          <div
            class="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a
              href="https://pixabay.com/es/videos/candente-filete-parilla-barbacoa-11632/"
              class="glightbox play-btn"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}
