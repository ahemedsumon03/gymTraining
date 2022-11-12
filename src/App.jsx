import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ExcersizeDetails, Home } from './pages';
import { NavBar, Footer } from './components';

const App = () => {
    return (
        <BrowserRouter>
            <Box>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/excersize/:id" element={<ExcersizeDetails />} />
                </Routes>
                <Footer />
            </Box>
        </BrowserRouter>
    )
}

export default App
