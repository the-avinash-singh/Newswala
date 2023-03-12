import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default class App extends Component {
  page=15;
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News key="general" pagesize={this.page} country="in" category="general"/>}/>
        <Route exact path="/business" element={<News key="business" pagesize={this.page} country="in" category="business"/>}/>
        <Route exact path="/entertainment" element={<News kwey="entertainment" pagesize={this.page} country="in" category="entertainment"/>}/>
        <Route exact path="/general" element={<News key="general" pagesize={this.page} country="in" category="general"/>}/>
        <Route exact path="/health" element={<News key="health" pagesize={this.page} country="in" category="health"/>}/>
        <Route exact path="/science" element={<News key="science" pagesize={this.page} country="in" category="science"/>}/>
        <Route exact path="/sports" element={<News key="sports" pagesize={this.page} country="in" category="sports"/>}/>
        <Route exact path="/technology" element={<News key="technology" pagesize={this.page} country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}
