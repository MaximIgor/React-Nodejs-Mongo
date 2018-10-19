import React from 'react';
import Header from './header/Header';
import LandingJumbotron from './landingJumbotron/LandingJumbotron'
import TodaysSelection from './todaysSelection/TodaysSelection'
import Privacy from './privacy/Privacy';
import Footer from './footer/Footer';
import '../sass/main.scss'

const App = () => (
      <div>
        <Header />
        <LandingJumbotron />
        <TodaysSelection/>
        <Privacy />
        <Footer />
      </div>
)

export default App;
