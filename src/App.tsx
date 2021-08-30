import React from 'react';
import './App.css';
import Form from './components/entry-form'


interface ITodo {
  name: string
  time: Date
  important: string | number | readonly string[] | undefined
  urgent: string | number | readonly string[] | undefined
}

function App() {
  
  const d = new Date('30 AUgust 2021')
  const [name, setName] = React.useState('')
  const [time, setTime] = React.useState(d)
  const [important, setImp] = React.useState('off')
  const [urgent, setUrg] = React.useState('off')

 
  let initialTodo = {
    name: '',
    important: 'off',
    urgent: 'off',
    time: d
  }
  const [todos, setTodos] = React.useState<ITodo[]>([initialTodo])
  
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>)  =>  {
      
      if (e.target.name === 'name'){
        setName(e.currentTarget.value)
      } else if (e.target.name === 'time'){
        setTime(new Date(e.currentTarget.value))
      } else if (e.target.name === 'urgent'){
  
        if (e.target.checked){
          setUrg('on')
        } else {
          setUrg('off')
        }
        
      } else if (e.target.name === 'important'){
        if (e.target.checked){
          setImp('on')
        } else {
          setImp('off')
        }
      }
      
    }
    

    const handleSubmit = ()  =>  {
       setTodos([...todos, {name: name, time: time, urgent: urgent, important: important}])
       
       
    }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>important or not</h1>
        <p>enter activity details below</p>

        <Form handleValueChange={handleValueChange} handleSubmit={handleSubmit} urgencyValue={urgent} importantValue={important}/>
      </header>

      
     
        
        {todos.map(todo =>  <ul>
          <li>{todo.name}</li>
          <li>{todo.urgent}</li>
          <li>{todo.important}</li>
          </ul>
        )}
      
    </div>
  );
}

export default App;
