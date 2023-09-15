import './App.css';
import React from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';


export default function App() {
const [progress,setProgress]=useState(0);
const page=10;
const apikey='e14454bc3d34401b9ba6ecb2bbfa20a9'
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}   
      />

        <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pagesize={page} country="in" category="general"/>}/>
        <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pagesize={page} country="in" category="business"/>}/>
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pagesize={page} country="in" category="entertainment"/>}/>
        <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" pagesize={page} country="in" category="general"/>}/>
        <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pagesize={page} country="in" category="health"/>}/>
        <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pagesize={page} country="in" category="science"/>}/>
        <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pagesize={page} country="in" category="sports"/>}/>
        <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pagesize={page} country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
}
