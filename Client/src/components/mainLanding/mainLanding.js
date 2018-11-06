import React from 'react';
import LandingJumbotron from '../landingJumbotron/LandingJumbotron';
import TodaysSelection from '../todaysSelection/TodaysSelection'
import GetAPlan from '../getAPlan/GetAPlan'
import Privacy from '../privacy/Privacy'
import OurPlans from '../ourPlans/OurPlans'


const MainLanding = () => (
    <div>
        <LandingJumbotron />
        <TodaysSelection tsTitle="Today's Selection" tsSubtitle="Watch our top rated films of today." landing={true}/>
        <GetAPlan/>
        <Privacy />
        <OurPlans/>
    </div>
)

export default MainLanding;