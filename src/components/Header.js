import React from "react";
import "../style/header.css";

export default function Header() {
  return (
    <header id="header" class="fixed-top d-flex align-items-cente">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 class="logo me-auto me-lg-0 nav_logo_name">
          <a href="index.html">LA BELLA IVREA</a>
        </h1>

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="#body">
                Inicio
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#about">
                Acerca de
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#menu">
                Menu
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#gallery">
                Galeria
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a
          href="#book-a-table"
          class="book-a-table-btn scrollto d-none d-lg-flex"
        >
          Reservar
        </a>
      </div>
    </header>
  );
}

//                <li><a class="nav-link scrollto" href="#events">Events</a></li>
//                <li><a class="nav-link scrollto" href="#chefs">Chefs</a></li>
//                <li><a class="nav-link scrollto" href="#specials">Specials</a></li>
