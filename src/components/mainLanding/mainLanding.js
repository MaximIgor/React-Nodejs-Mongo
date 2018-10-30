import React from 'react';
import LandingJumbotron from '../landingJumbotron/LandingJumbotron';
import TodaysSelection from '../todaysSelection/TodaysSelection'
import GetAPlan from '../getAPlan/GetAPlan'
import Privacy from '../privacy/Privacy'
import Ourplans from '../ourPlans/Ourplans'


const MainLainding = () => (
    <div>
        <LandingJumbotron />
        <TodaysSelection/>
        <GetAPlan/>
        <Privacy />
        <Ourplans/>
    </div>
)

export default MainLainding;