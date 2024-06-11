import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';



function Footer() {
    return (
      <footer id="localizacao">
        <div className="services">
          <h2>Venha conhecer</h2>
        </div>
        <iframe
          className="mapa"
          width="100%"
          height="450"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.171524
          801603!2d-46.701736324542416!3d-23.669823265586132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce515bb231b5ed%3A0x327b78892baef8e6!2zU2VuYWMgTmHDp8O1ZXMgVW5pZGFz!5e0!3m2!1spt-BR!2sbr!4v1716925527933!5m2!1spt-BR!2sbr"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa"
        ></iframe>
        <div className="footer">
          <div className="footer-icons">
            <a href="https://www.instagram.com/">
              <FaInstagram className="fa-brands fa-instagram fa-2x" />
            </a>
            <a href="https://www.facebook.com/?locale=pt_BR">
              <FaFacebook className="fa-brands fa-facebook fa-2x" />
            </a>
          </div>
          <h2>Venha para a T-BarberShop e descubra um novo padrão em cuidados masculinos.</h2>
          <p>Copyright© 2023 | T-BarberShop - Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  }

  export default Footer;