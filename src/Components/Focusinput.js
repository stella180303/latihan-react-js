import React, { Component } from 'react'
import Input from './Input'

class Focusinput extends Component {
  
    constructor(props) {
        super(props)
      
        this.componentRef = React.createRef()
      }
      
  
      clickHandler = () => {
          this.componentRef.current.focusInput()
      }
  
    // ini kasus nya ceritanya mau buat button biar bisa fokusin ke field nya
  
    render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default Focusinput
