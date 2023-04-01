import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default class App extends Component {
  state={
    progress:0
  }
setProgress=(progress)=>{
  this.setState({progress:progress})
}
page=15;
apikey=process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}   
      />

        <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={this.page} country="in" category="general"/>}/>
        <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pagesize={this.page} country="in" category="business"/>}/>
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pagesize={this.page} country="in" category="entertainment"/>}/>
        <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={this.page} country="in" category="general"/>}/>
        <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pagesize={this.page} country="in" category="health"/>}/>
        <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pagesize={this.page} country="in" category="science"/>}/>
        <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pagesize={this.page} country="in" category="sports"/>}/>
        <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pagesize={this.page} country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}
