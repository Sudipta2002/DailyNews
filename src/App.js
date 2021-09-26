import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
// import { useState } from 'react';

export default class App extends Component {
  render() { 
    // const [mode, setmode] = useState("light");
    return (
      <div>
        <NavBar mode="dark"/>
        <News/> 
      </div>
    )
  }
}
