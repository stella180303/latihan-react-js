
import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import Welcome from './Components/Welcome';
import { Component } from 'react';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import NameListKey from './Components/NameListKey';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import styles from './appStyles.module.css'
import './appStyles.css';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
    
    <Form />
   
     {/* 


    

    Styling and css basics :
    - <Stylesheet primary={true} />
    - <Inline />

     // stylesheet biasa
    <h1 className='error'>
      Error
    </h1>

    // Stylesheet module
    <h1 className={styles.success}>
      Successss
    </h1>

    KeyProps at list rendering : <NameListKey />
    List Rendering : <NameList />
    Conditional Rendering : <UserGreeting />
    
    Methods as props : <ParentComponent />
    
    Binding Event Handler : <EventBind />
    
    Event Handling : 
      - <FunctionClick />
      - <ClassClick />
    
    setState : <Counter />
    
    <h1>State</h1>
    
    <Message /> 
     functional component
      <Welcome  />
      <Hello  name = "Bruce" heroname="guru">
        <p>
          This is children props
        </p>
      </Hello>
      
      <Hello  name = "Lala" heroname="polisi">
        <button>Action</button>
      </Hello>

    class component
      <Welcome  name = "Diana" heroname="suster" />
      <Welcome  name = "sicantik" heroname="suster" /> */}
    

 
      </div> 
 );
}

export default App;
