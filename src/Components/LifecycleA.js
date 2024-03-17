import React, { Component } from 'react'

 class LifecycleA extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Stella'
      }
      console.log('LifecycleA Constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
  
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    
    
    render() {

        console.log('LifecycleA render')

        return (
        <div>
            LifecycleA
        </div>
        )
  }
}

export default LifecycleA
