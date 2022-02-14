import React from "react";
import "../style/about.css";

export default function About() {
  return (
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Acerca de Nosotros</h2>
        </div>

        <div class="row">
          <div
            class="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="about-img">
              <img
                src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625223956/about_l59qpi.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-4 pt-4 pt-lg-0 order-1 order-lg-1 content">
            <h5>
              Somos un restaurante único en León de cortes y platillos
              argentinos con una nueva propuesta gastronómica, en un ambiente
              familiar, con un compromiso de parte de nuestros colaboradores de
              brindar un servicio de calidad y calidez, dando a nuestros
              clientes el reconocimiento que se merecen.
            </h5>
            <h5>Desde 1980 ofrecemos los mejores platillos a la carta.</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
