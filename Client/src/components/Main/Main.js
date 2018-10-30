import React from 'react';
import MainLanding from '../mainLanding/mainLanding'
import SearchResults from '../searchResults/searchResults'
import Profile from '../profile/profile'
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={MainLanding}/>
            <Route exact path='/searchResults' component={SearchResults}/>
            <Route exact path='/profile/:id' component={Profile}/>
        </Switch>
    </main>
)

export default Main;