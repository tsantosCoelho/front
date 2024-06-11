import React from 'react';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import About from './components/About';
import Servicess from './components/Servicess';
import Location from './components/Location';

import './SCSS/style.scss';

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
        <Servicess />
        <Location />
      </div>
    </>
  );
}

export default App;

