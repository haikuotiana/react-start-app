import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import '@/assets/css/common.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Index from "@/page/index/index.jsx";
import Login from "@/page/login/index";
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="index" element={<Index />} />
            <Route path="login" element={<Login />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('app')
);