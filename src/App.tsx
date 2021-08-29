import React from 'react';
import './App.css';
import Form from './components/entry'


function App() {

  const [name, setName] = React.useState('')
  const [time, setTime] = React.useState('')
  const [important, setImp] = React.useState('')
  const [urgent, setUrg] = React.useState('')

 

  const [todos, setTodos] = React.useState([{name: 'not set'}])
  
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>)  =>  {
      setName(e.currentTarget.value)
    }
    const handleTimeChange =(e: React.ChangeEvent<HTMLInputElement>)  =>  {
      setTime(e.currentTarget.value)
    }
  const handleUrgChange = (e: React.ChangeEvent<HTMLInputElement>)  =>  {
    setImp(e.currentTarget.value)
  }
  const handleImpChange = (e: React.ChangeEvent<HTMLInputElement>)  =>  {
    e.preventDefault()
    setUrg(e.currentTarget.value)
  }

    const handleSubmit = ()  =>  {
       setTodos([{name: name}])
       console.log(todos)
       
    }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>important or not</h1>
        <p>enter activity details below</p>

        <form id='Entry-form'>
            <div><input type="text" placeholder='Name'   onChange={handleNameChange}/></div>
            <div><input type="text" placeholder='When'  onChange={handleTimeChange}/></div>
            <div><input type="text" placeholder='Is this important?' onChange={handleImpChange}/></div>
            <div><input type="text" placeholder='Is this urgent?'  onChange={handleUrgChange}/></div>
            
            <button id="Submit-button"  onClick={handleSubmit}>add </button>
        </form>
        
      </header>

      
      <ul>
        <li>
          {name}
        </li>
        <li>
          {time}
        </li>
        <li>
          {important}
        </li>
        <li>
          {urgent}
        </li>
      </ul>
    </div>
  );
}

export default App;
