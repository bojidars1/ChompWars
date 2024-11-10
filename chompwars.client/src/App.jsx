import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Game from './pages/Game';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                   <Route path='/' element={<Home /> } />
                   <Route path='/game' element={<Game /> } />
                </Routes>
            </Layout>
        </Router>    
    );
}

export default App;