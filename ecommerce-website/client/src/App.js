import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Layout/Navbar';
import Home from './pages/Home';
import Ads from './pages/Ads';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CreateAd from './components/Advertisements/CreateAd';
import EditAd from './components/Advertisements/EditAd';
import PrivateRoute from './utils/PrivateRoute';

const App = () => {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ads" element={<Ads />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create-ad" element={<PrivateRoute><CreateAd /></PrivateRoute>} />
                <Route path="/edit-ad/:id" element={<PrivateRoute><EditAd /></PrivateRoute>} />
            </Routes>
        </Router>
    );
};

export default App;
