import React from "react";
import "../style/menu.css";

export default function Menu() {
  return (
    <section id="menu" class="menu section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Menu</h2>
          <p>Dale un vistazo a nuestro Menú</p>
        </div>

        <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
          <div class="col-lg-6 menu-item filter-starters">
            <img
              src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224688/lobster-bisque_geuemb.jpg"
              class="menu-img"
              alt=""
            />
            <div class="menu-content">
              <a href="#">Langosta Lorem</a>
              <span>$5.95</span>
            </div>
            <div class="menu-ingredients">
              Arroz con langosta, butifarra negra y erizos de mar
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-specialty">
            <img
              src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224709/bread-barrel_upojcb.jpg"
              class="menu-img"
              alt=""
            />
            <div class="menu-content">
              <a href="#">Bread and sel</a>
              <span>$6.95</span>
            </div>
            <div class="menu-ingredients">
              Empanada de camarón en salsa de ostion
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-starters">
            <img
              src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224708/cake_ksisd9.jpg"
              class="menu-img"
              alt=""
            />
            <div class="menu-content">
              <a href="#">Cake fetuccini</a>
              <span>$7.95</span>
            </div>
            <div class="menu-ingredients">
              Merengue receta con fresas y helado. ¡Te traemos un postre
              irresistible!
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-salads">
            <img
              src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224708/caesar_k0wgnb.jpg"
              class="menu-img"
              alt=""
            />
            <div class="menu-content">
              <a href="#">Ensalada de Mango</a>
              <span>$8.95</span>
            </div>
            <div class="menu-ingredients">
              Ensalada de Mango con Aderezo de Albahaca
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-specialty">
            <img
              src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224709/tuscan-grilled_upwctm.jpg"
              class="menu-img"
              alt=""
            />
            <div class="menu-content">
              <a href="#">Tuscan Grilled</a>
              <span>$9.95</span>
            </div>
            <div class="menu-ingredients">
              Pollo asado marinado con sangrita roja, tequila y nopales asados
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-starters">
            <img
              src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224708/mozzarella_urafgz.jpg"
              class="menu-img"
              alt=""
            />
            <div class="menu-content">
              <a href="#">Mozzarella Stick</a>
              <span>$4.95</span>
            </div>
            <div class="menu-ingredients">
              Queso Mozzarella de Búfala Colanta. Queso fresco, semiblando,
              graso y bajo en sodio, elaborado con leche de búfala
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-salads">
            <img
              src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224708/greek-salad_rdggei.jpg"
              class="menu-img"
              alt=""
            />
            <div class="menu-content">
              <a href="#">Greek Salad</a>
              <span>$9.95</span>
            </div>
            <div class="menu-ingredients">
              ¡La ensalada de pasta griega Tortellini rápida y fácil con aderezo
              de limón griego picante, verduras frescas y abundante pasta
              tortellini será su plato de comida y cena!{" "}
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-salads">
            <img
              src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224709/spinach-salad_yiqmqa.jpg"
              class="menu-img"
              alt=""
            />
            <div class="menu-content">
              <a href="#">Spinach Salad</a>
              <span>$9.95</span>
            </div>
            <div class="menu-ingredients">
              La ensalada de pasta de espinacas es el equilibrio perfecto de
              verduras, verduras y pasta con un aderezo balsámico sin aceite{" "}
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-specialty">
            <img
              src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224708/lobster-roll_yvpoqy.jpg"
              class="menu-img"
              alt=""
            />
            <div class="menu-content">
              <a href="#">Coctel de Camaron</a>
              <span>$12.95</span>
            </div>
            <div class="menu-ingredients">
              Un refrescante y auténtico cóctel de camarones mexicanos con
              muchos sabores picantes es un entrante perfecto o una comida
              ligera. Sírvelo frío con galletas saladas en el costado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
<div class="row" data-aos="fade-up" data-aos-delay="100">
<div class="col-lg-12 d-flex justify-content-center">
  <ul id="menu-flters">
    <li data-filter="*" class="filter-active">Todo</li>
    <li data-filter=".filter-starters">Entradas</li>
    <li data-filter=".filter-salads">Ensaladas</li>
    <li data-filter=".filter-specialty">Especialidad</li>
  </ul>
</div>
</div>
*/
