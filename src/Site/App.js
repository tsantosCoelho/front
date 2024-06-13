import React from 'react';
import '../SCSS/style.scss';
import { Helmet } from 'react-helmet';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import logo from '../assets/images/logo.svg';
import imagemSobre from '../assets/images/images.svg';
import cabelo1 from '../assets/images/cabelo1.png';
import cabelo2 from '../assets/images/cabelo2.png';
import cabelo3 from '../assets/images/cabelo3.png';

function Home() {
  return (
    <div className="bg-home" id="inicio">
      <header>
        <nav className="header-content container">
          <div className="header-icons">
            <a href="https://www.instagram.com/">
              <FaInstagram className="fa-brands Fa-Instagram fa-2x" />
            </a>
            <a href="https://www.facebook.com/?locale=pt_BR">
              <FaFacebook className="fa-brands Fa-Facebook fa-2x" />
            </a>
          </div>
          <div className="header-logo">
            <img src={logo} alt="Logo barbearia" />
          </div>
          <div>
            <a className="header-button" href="#login">
              Login
            </a>
          </div>
        </nav>
        <main className="hero container">
          <h1>Bem-vindo à T-BarberShop, onde estilo e excelência se encontram para transformar o seu visual.</h1>
          <p>Horário de funcionamento: 09:00 às 19:00</p>
          <div className="hero-button">
            <a className="hero-button2" href="#inicio">Início</a>
            <a className="hero-button3" href="#sobre">Sobre</a>
            <a className="hero-button4" href="#servicos">Serviços</a>
            <a className="hero-button5" href="#localizacao">Localização</a>
          </div>
        </main>
      </header>
    </div>
  );
}

function About() {
  return (
    <section className="about" id="sobre">
      <div className="container about-content">
        <div>
          <img src={imagemSobre} alt="Imagem sobre a barbearia" />
        </div>
        <div className="about-description">
          <h2>SOBRE</h2>
          <p>Na T-BarberShop, acreditamos que cada corte de cabelo é uma obra de arte. Com uma equipe de barbeiros experientes e apaixonados pelo que fazem, oferecemos um ambiente acolhedor e sofisticado, onde você pode relaxar e sair renovado. Nossa missão é proporcionar uma experiência única, combinando técnicas tradicionais com as tendências mais modernas para destacar o melhor de você.</p>
          <p>Horário de funcionamento: 09:00 às 19:00</p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="servicos">
      <div className="services-content container">
        <h2>SERVIÇOS</h2>
        <p>Cortes de Cabelo: Clássicos e modernos, adaptados ao seu estilo. <br /><br /> Barbas e Bigodes: Aparos e design detalhado com produtos de alta qualidade. <br /><br /> Tratamentos Capilares: Hidratação e revitalização para a saúde do seu cabelo.</p>
      </div>
      <section className="haircuts">
        <div className="haircut">
          <img src={cabelo1} alt="Corte normal" />
          <div className="haircut-info">
            <strong>Corte normal</strong>
            <button>R$ 45,00</button>
          </div>
        </div>
        <div className="haircut">
          <img src={cabelo2} alt="Barba completa" />
          <div className="haircut-info">
            <strong>Barba completa</strong>
            <button>R$ 35,00</button>
          </div>
        </div>
        <div className="haircut">
          <img src={cabelo3} alt="Corte e barba" />
          <div className="haircut-info">
            <strong>Corte e barba</strong>
            <button>R$ 70,00</button>
          </div>
        </div>
      </section>
    </section>
  );
}

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

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>
      <div>
        <Home />
        <About />
        <Services />
        <Footer />
      </div>
    </>
  );
}

export default App;
