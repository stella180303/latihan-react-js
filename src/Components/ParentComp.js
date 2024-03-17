import React, { Component } from 'react'
import RegComp from './RegComp'
import Purecomponent from './Purecomponent'

class ParentComp extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Stella'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Stella'
            })
        }, 2000)
    }
    
  
    render() {
    console.log('+++++++++++++++++Parent Comp Render++++++++++++++')
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <Purecomponent name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
