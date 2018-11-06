import React from 'react';
import MainLanding from '../mainLanding/mainLanding'
import SearchResults from '../searchResults/searchResults'
import Profile from '../profile/Profile'
import VideoView from '../videoView/VideoView'
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={MainLanding}/>
            <Route exact path='/searchResults/:id' component={SearchResults}/>
            <Route exact path='/profile/:id' component={Profile}/>
            <Route exact path='/view/:id' component={VideoView}/>
        </Switch>
    </main>
)

export default Main;