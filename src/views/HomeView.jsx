import React from 'react';
import Home from '../components/Home.jsx';
import DesktopNavBar from '../components/DesktopNavBar.jsx';
//Import nav bars and css files 

const HomeView = (props) => (
    <div>
        <DesktopNavBar />
        <Home />
    </div>
)

export default HomeView;