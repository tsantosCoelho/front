import React from 'react';

import imagemSobre from '../../assets/images/images.svg';


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

  export default About;