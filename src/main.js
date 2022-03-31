import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import '@/assets/css/common.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Index from "@/page/index/index.jsx";
import Login from "@/page/login/index";
import { AuthProvider, RequireAuth } from '@/utils/Auth.js'//登录token鉴权
ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/" element={
                    <RequireAuth>
                        <App />
                    </RequireAuth>
                }>
                    <Route path="/index" element={<Index />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>,
    document.getElementById('app')
);