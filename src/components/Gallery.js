import React from "react";
import "../style/gallery.css";
import gallery1 from "../images/gallery/gallery-1.jpeg";
import gallery2 from "../images/gallery/gallery-2.jpeg";
import gallery3 from "../images/gallery/gallery-3.jpeg";
import gallery4 from "../images/gallery/gallery-4.jpeg";
import gallery5 from "../images/gallery/gallery-5.jpeg";
import gallery6 from "../images/gallery/gallery-6.jpeg";
import gallery7 from "../images/gallery/gallery-7.jpeg";
import gallery8 from "../images/gallery/gallery-8.jpeg";

export default function Gallery() {
  return (
    <section id="gallery" class="gallery">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Galería</h2>
          <p>Rincones de Nuestro Resturante</p>
        </div>
      </div>

      <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div class="row g-0">
          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <img src={gallery1} alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <img src={gallery2} alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <img src={gallery3} alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <img src={gallery4} alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <img src={gallery5} alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <img src={gallery6} alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <img src={gallery7} alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <img src={gallery8} alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
<a
href="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625226091/gallery-1_jkqjgv.jpg"
class="gallery-lightbox"
data-gall="gallery-item"
>
<img
  src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625226091/gallery-1_jkqjgv.jpg"
  alt=""
  class="img-fluid"
/>
</a>*/
