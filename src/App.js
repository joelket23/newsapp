// i named her feriha
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 15;
  apiKey = "d59164e06e434669a3b36bc2f2e4543c"
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          height={2}
            color='#f11946'
            progress={this.state.progress}

          />

          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pagesize={this.pageSize} country='in' category="health" /></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pagesize={this.pageSize} country='in' category="business" /></Route>
            <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pagesize={this.pageSize} country='in' category="general" /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pagesize={this.pageSize} country='in' category="health" /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pagesize={this.pageSize} country='in' category="entertainment" /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pagesize={this.pageSize} country='in' category="science" /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pagesize={this.pageSize} country='in' category="sports" /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pagesize={this.pageSize} country='in' category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}



