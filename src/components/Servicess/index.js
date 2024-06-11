import React from 'react';


import cabelo1 from '../../assets/images/cabelo1.png';
import cabelo2 from '../../assets/images/cabelo2.png';
import cabelo3 from '../../assets/images/cabelo3.png';

function Servicess() {
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

  export default Servicess;