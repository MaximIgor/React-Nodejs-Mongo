import React from 'react';
import Header from './header/Header';
import LandingJumbotron from './landingJumbotron/LandingJumbotron'
import TodaysSelection from './todaysSelection/TodaysSelection'
import GetAPlan from './getAPlan/GetAPlan'
import Privacy from './privacy/Privacy';
import OurPlans from './OurPlans/ourplans';
import Last from './Last/last'
import Footer from './footer/Footer';
import '../sass/main.scss'

const App = () => (
    <div>
        <Header />
        <LandingJumbotron />
        <TodaysSelection/>
        <GetAPlan/>
        <Privacy />
<<<<<<< HEAD
        <OurPlans/>
        <Last/>
=======
>>>>>>> 9074c3ca6ca83707e5a5297b527ee9fd1203d367
        {/*<Footer />*/}
    </div>
)

export default App;
