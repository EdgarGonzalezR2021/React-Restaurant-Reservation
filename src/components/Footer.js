import React from "react";
import "../style/footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-info">
                <h3>Restaurant La Bella Ivrea</h3>
                <p>
                  Paseo de los Insurgentes 1200 <br />
                  León, Mexico
                  <br />
                  <br />
                  <strong>Tel.:</strong> +52 01 477 328 26 52
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
                <div class="social-links mt-3">
                  <a href="#" class="twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="facebook">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a href="#" class="instagram">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#" class="google-plus">
                    <i class="fab fa-skype"></i>
                  </a>
                  <a href="#" class="linkedin">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Salta a Links</h4>
              <ul>
                <li>
                  <i class="fa fa-chevron-right"></i> <a href="#">Inicio</a>
                </li>
                <li>
                  <i class="fa fa-chevron-right"></i> <a href="#">Acerca de</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Suscríbete a nuestro boletín</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribirse" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>La Bella Ivrea</span>
          </strong>
          . Derechos reservados
        </div>
      </div>
    </footer>
  );
}
