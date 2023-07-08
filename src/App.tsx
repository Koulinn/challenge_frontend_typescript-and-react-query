import React from 'react';

import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import MainWrapper from './components/atoms/Wrappers/MainWrapper';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <>
            <Header />
            <MainWrapper>
                <Outlet />
            </MainWrapper>
            <Footer />
        </>
    );
}

export default App;
