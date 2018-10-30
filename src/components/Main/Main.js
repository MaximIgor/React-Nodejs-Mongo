import React from 'react';
import MainLanding from '../mainLanding/mainLanding'
import SearchResults from '../searchResults/searchResults'
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={MainLanding}></Route>
            <Route exact path='/searchResults' component={SearchResults}></Route>
        </Switch>
    </main>
)

export default Main;