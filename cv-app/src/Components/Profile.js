import React, { Component } from 'react'

export default class Profile extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <img src={this.props.image} alt={this.props.profileName}/>
      </div>
    )
  }
}
