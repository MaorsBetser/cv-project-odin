import React, { Component } from 'react'
import Header from './Components/Header'

export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}
