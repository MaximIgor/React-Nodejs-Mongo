import React from 'react';
import Header from './header/Header';
import LandingJumbotron from './landingJumbotron/LandingJumbotron'
import Footer from './footer/Footer';
import '../css/main.css'
import '../sass/main.scss'

const App = () => (
      <div>
        <Header />
        <LandingJumbotron />
        <Footer />
      </div>
)

export default App;
